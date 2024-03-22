import { Command } from "commander";

import packageJSON from "../package.json" assert { type: "json" };

interface GenerateOptions {
  src: string;
  dist: string;
  name: string;
  class: string;
}

const generateCommandAction = (target: "ttf", options: GenerateOptions) => {
  console.log("generateCommandAction", target, options);

  // TODO:
};

const generateCommand = new Command("generate")
  .description("TTF 파일을 Dart 파일로 변환합니다")
  .argument("<target>", "변환 대상")
  .option("-s, --src <src>", "변환할 파일 경로")
  .option("-d, --dist <dist>", "생성할 Dart 파일 경로")
  .option("-n, --name <name>", "생성할 Dart 파일 이름")
  .option("-c, --class <class>", "생성할 Dart 클래스 이름")
  .action(generateCommandAction);

const program = new Command();
program.addCommand(generateCommand);
program.version(packageJSON.version, "-v, --version", "버전을 출력합니다");
program.parse(process.argv);
