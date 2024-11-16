"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Printer } from "lucide-react";

export function MeasurementForm() {
  const [formData, setFormData] = useState({
    serialNo: "",
    name: "",
    date: "",
    deliveryTime: "",
    styleRemark: "",
    fullLength: "",
    waistRound: "",
    bustRound: "",
    neckWidth: "",
    sholder: "",
    armRound: "",
    backNeck: "",
    sleeveLength: "",
    sholderSlit: "",
    frontNeck: "",
    sleeveOpenRound: "",
    hipRound: "",
    chestRound: "",
    thighRound: "",
    bottomFull: "",
    kneeRound: "",
    angleRound: "",
    sholderBustPoint: "",
    leftRightBustPoint: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto p-4">
      {/* Form UI - screen only */}
      <div className="screen-only">
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">BOOK REVIEW</h1>
              <Button
                onClick={() => window.print()}
                variant="outline"
                size="sm"
              >
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8 space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="serialNo">S.No:</Label>
                    <Input
                      id="serialNo"
                      name="serialNo"
                      value={formData.serialNo}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="date">Date:</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="name">Name:</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="deliveryTime">Delivery Time & Date:</Label>
                    <Input
                      id="deliveryTime"
                      name="deliveryTime"
                      value={formData.deliveryTime}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="styleRemark">Style (Remark):</Label>
                    <Input
                      id="styleRemark"
                      name="styleRemark"
                      value={formData.styleRemark}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Top Measurements */}
                <div>
                  <h2 className="font-bold mb-4">Top :-</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      ["fullLength", "Full Length"],
                      ["waistRound", "Waist Round"],
                      ["bustRound", "Bust Round"],
                      ["neckWidth", "Neck Width"],
                      ["sholder", "Sholder"],
                      ["armRound", "Arm Round"],
                      ["backNeck", "Back Neck"],
                      ["sleeveLength", "Sleeve Length"],
                      ["sholderSlit", "Sholder Slit"],
                      ["frontNeck", "Front Neck"],
                      ["sleeveOpenRound", "Sleeve Open Round"],
                      ["hipRound", "Hip Round"],
                      ["chestRound", "Chest Round"],
                    ].map(([name, label]) => (
                      <div key={name}>
                        <Label htmlFor={name}>{label}:</Label>
                        <Input
                          id={name}
                          name={name}
                          value={formData[name as keyof typeof formData]}
                          onChange={handleInputChange}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Measurements */}
                <div>
                  <h2 className="font-bold mb-4">Bottom :-</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      ["thighRound", "Thigh Round"],
                      ["bottomFull", "Bottom Full"],
                      ["kneeRound", "Knee Round"],
                      ["angleRound", "Angle Round"],
                    ].map(([name, label]) => (
                      <div key={name}>
                        <Label htmlFor={name}>{label}:</Label>
                        <Input
                          id={name}
                          name={name}
                          value={formData[name as keyof typeof formData]}
                          onChange={handleInputChange}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dart Measurements */}
                <div>
                  <h2 className="font-bold mb-4">Dart :-</h2>
                  <div className="space-y-4">
                    {[
                      ["sholderBustPoint", "Sholder - Bust Point +1 Inch"],
                      [
                        "leftRightBustPoint",
                        "Left Bust Point + Right Bust Point",
                      ],
                    ].map(([name, label]) => (
                      <div key={name}>
                        <Label htmlFor={name}>{label}:</Label>
                        <Input
                          id={name}
                          name={name}
                          value={formData[name as keyof typeof formData]}
                          onChange={handleInputChange}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mannequin Image */}
              <div className="col-span-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(14)-yq3fWQvpiXk9oEtUegpNyb3taNsvQs.png"
                  alt="Measurement Reference Figure"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Print Layout */}
      <div className="print-only">
        <div className="w-[297mm] h-[210mm] p-2 bg-white">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex-1">
              S.No:{" "}
              <span className="border-b border-black min-w-[100px] inline-block">
                {formData.serialNo}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-center flex-1">
              BOOK REVIEW
            </h1>
            <div className="flex-1"></div>
          </div>

          <div className="mb-4">
            <div className="flex gap-4">
              <div className="flex-1">
                Name:{" "}
                <span className="border-b border-black w-full inline-block">
                  {formData.name}
                </span>
              </div>
              <div className="w-48">
                Date:{" "}
                <span className="border-b border-black w-32 inline-block">
                  {formData.date}
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-72">
                Delivery Time & Date:{" "}
                <span className="border-b border-black w-32 inline-block">
                  {formData.deliveryTime}
                </span>
              </div>
              <div className="flex-1">
                Style (Remark):{" "}
                <span className="border-b border-black w-80 inline-block">
                  {formData.styleRemark}
                </span>
              </div>
            </div>
          </div>

          {/* Header Separator */}
          <div className="border-b-2 border-black mb-6"></div>

          <div className="flex">
            {/* Measurements Section */}
            <div className="flex-1 pr-8 border-r-2 border-black">
              {/* Top Section */}
              <div className="mb-6">
                <h2 className="font-bold mb-4">Top :-</h2>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    ["fullLength", "Full Length"],
                    ["waistRound", "Waist Round"],
                    ["bustRound", "Bust Round"],
                    ["neckWidth", "Neck Width"],
                    ["sholder", "Sholder"],
                    ["armRound", "Arm Round"],
                    ["backNeck", "Back Neck"],
                    ["sleeveLength", "Sleeve Length"],
                    ["sholderSlit", "Sholder Slit"],
                    ["frontNeck", "Front Neck"],
                    ["sleeveOpenRound", "Sleeve Open Round"],
                    ["hipRound", "Hip Round"],
                    ["chestRound", "Chest Round"],
                  ].map(([name, label]) => (
                    <div key={name}>
                      {label}:{" "}
                      <span className="border-b border-black w-32 inline-block">
                        {formData[name as keyof typeof formData]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section Separator */}
              <div className="border-b border-black mb-6"></div>

              {/* Bottom Section */}
              <div className="mb-6">
                <h2 className="font-bold mb-4">Bottom :-</h2>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    ["thighRound", "Thigh Round"],
                    ["bottomFull", "Bottom Full"],
                    ["kneeRound", "Knee Round"],
                    ["angleRound", "Angle Round"],
                  ].map(([name, label]) => (
                    <div key={name}>
                      {label}:{" "}
                      <span className="border-b border-black w-32 inline-block">
                        {formData[name as keyof typeof formData]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section Separator */}
              <div className="border-b border-black mb-6"></div>

              {/* Dart Section */}
              <div>
                <h2 className="font-bold mb-4">Dart :-</h2>
                <div className="space-y-4">
                  {[
                    ["sholderBustPoint", "Sholder - Bust Point +1 Inch"],
                    [
                      "leftRightBustPoint",
                      "Left Bust Point + Right Bust Point",
                    ],
                  ].map(([name, label]) => (
                    <div key={name}>
                      {label}:{" "}
                      <span className="border-b border-black w-48 inline-block">
                        {formData[name as keyof typeof formData]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mannequin Image */}
            <div className="w-72 pl-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(14)-yq3fWQvpiXk9oEtUegpNyb3taNsvQs.png"
                alt="Measurement Reference Figure"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media screen {
          .print-only {
            display: none;
          }
        }
        @media print {
          .screen-only {
            display: none;
          }
          .print-only {
            display: block;
          }
          @page {
            size: landscape;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
          }
          .border-b {
            border-bottom-width: 1px !important;
            border-bottom-style: solid !important;
            border-bottom-color: black !important;
          }
        }
      `}</style>
    </div>
  );
}
