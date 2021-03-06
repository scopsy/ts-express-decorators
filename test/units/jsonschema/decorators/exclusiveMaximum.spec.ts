import {JsonSchema} from "../../../../src/jsonschema/class/JsonSchema";
import {ExclusiveMaximum} from "../../../../src/jsonschema/decorators/exclusiveMaximum";
import {stubSchemaDecorator} from "./utils";

describe("ExclusiveMaximum", () => {
    describe("with explicit parameter", () => {
        before(() => {
            this.decorateStub = stubSchemaDecorator();
            this.schema = new JsonSchema();
            ExclusiveMaximum(10, true);
            this.decorateStub.getCall(0).args[0](this.schema);
        });
        after(() => {
            this.decorateStub.restore();
        });

        it("should store data", () => {
            this.schema.exclusiveMaximum.should.eq(10);
        });
    });

    describe("without explicit parameter", () => {
        before(() => {
            this.decorateStub = stubSchemaDecorator();
            this.schema = new JsonSchema();
            ExclusiveMaximum(10);
            this.decorateStub.getCall(0).args[0](this.schema);
        });
        after(() => {
            this.decorateStub.restore();
        });

        it("should store data", () => {
            this.schema.exclusiveMaximum.should.eq(10);
        });
    });
});