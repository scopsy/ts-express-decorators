import {JsonSchema} from "../../../../src/jsonschema/class/JsonSchema";
import {Pattern} from "../../../../src/jsonschema/decorators/pattern";
import {stubSchemaDecorator} from "./utils";

describe("Pattern", () => {
    describe("with string pattern", () => {
        before(() => {
            this.decorateStub = stubSchemaDecorator();
            this.schema = new JsonSchema();
            Pattern("patternValue");
            this.decorateStub.getCall(0).args[0](this.schema);
        });
        after(() => {
            this.decorateStub.restore();
        });

        it("should store data", () => {
            this.schema.pattern.should.be.eq("patternValue");
        });
    });
    describe("with regexp pattern", () => {
        before(() => {
            this.decorateStub = stubSchemaDecorator();
            this.schema = new JsonSchema();
            Pattern(/abc/);
            this.decorateStub.getCall(0).args[0](this.schema);
        });
        after(() => {
            this.decorateStub.restore();
        });

        it("should store data", () => {
            this.schema.pattern.should.be.eq("abc");
        });
    });
});