# `pipelineSink` Submodule <a name="`pipelineSink` Submodule" id="@cdktn/provider-cloudflare.pipelineSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipelineSink <a name="PipelineSink" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink cloudflare_pipeline_sink}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

new pipelineSink.PipelineSink(scope: Construct, id: string, config: PipelineSinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig">PipelineSinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig">PipelineSinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat">putFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig"></a>

```typescript
public putConfig(value: PipelineSinkConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

---

##### `putFormat` <a name="putFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat"></a>

```typescript
public putFormat(value: PipelineSinkFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

---

##### `putSchema` <a name="putSchema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putSchema"></a>

```typescript
public putSchema(value: PipelineSinkSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetSchema"></a>

```typescript
public resetSchema(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PipelineSink resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isConstruct"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

pipelineSink.PipelineSink.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformElement"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

pipelineSink.PipelineSink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformResource"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

pipelineSink.PipelineSink.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

pipelineSink.PipelineSink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PipelineSink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PipelineSink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PipelineSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PipelineSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference">PipelineSinkConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference">PipelineSinkFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference">PipelineSinkSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.configInput">configInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.formatInput">formatInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schemaInput">schemaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.config"></a>

```typescript
public readonly config: PipelineSinkConfigAOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference">PipelineSinkConfigAOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.format"></a>

```typescript
public readonly format: PipelineSinkFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference">PipelineSinkFormatOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schema"></a>

```typescript
public readonly schema: PipelineSinkSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference">PipelineSinkSchemaOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | PipelineSinkConfigA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.formatInput"></a>

```typescript
public readonly formatInput: IResolvable | PipelineSinkFormat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schemaInput"></a>

```typescript
public readonly schemaInput: IResolvable | PipelineSinkSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineSinkConfig <a name="PipelineSinkConfig" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

const pipelineSinkConfig: pipelineSink.PipelineSinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.name">name</a></code> | <code>string</code> | Defines the name of the Sink. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.type">type</a></code> | <code>string</code> | Specifies the type of sink. Available values: "r2", "r2_data_catalog". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.accountId">accountId</a></code> | <code>string</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a></code> | Defines the configuration of the R2 Sink. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#format PipelineSink#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#schema PipelineSink#schema}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Defines the name of the Sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#name PipelineSink#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Specifies the type of sink. Available values: "r2", "r2_data_catalog".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#account_id PipelineSink#account_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.config"></a>

```typescript
public readonly config: PipelineSinkConfigA;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

Defines the configuration of the R2 Sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#config PipelineSink#config}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.format"></a>

```typescript
public readonly format: PipelineSinkFormat;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#format PipelineSink#format}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.schema"></a>

```typescript
public readonly schema: PipelineSinkSchema;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#schema PipelineSink#schema}.

---

### PipelineSinkConfigA <a name="PipelineSinkConfigA" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

const pipelineSinkConfigA: pipelineSink.PipelineSinkConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare Account ID for the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.bucket">bucket</a></code> | <code>string</code> | R2 Bucket to write to. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#credentials PipelineSink#credentials}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.fileNaming">fileNaming</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a></code> | Controls filename prefix/suffix and strategy. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.jurisdiction">jurisdiction</a></code> | <code>string</code> | Jurisdiction this bucket is hosted in. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.namespace">namespace</a></code> | <code>string</code> | Table namespace. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.partitioning">partitioning</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a></code> | Data-layout partitioning for sinks. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.path">path</a></code> | <code>string</code> | Subpath within the bucket to write to. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.rollingPolicy">rollingPolicy</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a></code> | Rolling policy for file sinks (when & why to close a file and open a new one). |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.tableName">tableName</a></code> | <code>string</code> | Table name. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.token">token</a></code> | <code>string</code> | Authentication token. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#account_id PipelineSink#account_id}

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

R2 Bucket to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#bucket PipelineSink#bucket}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.credentials"></a>

```typescript
public readonly credentials: PipelineSinkConfigCredentials;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#credentials PipelineSink#credentials}.

---

##### `fileNaming`<sup>Optional</sup> <a name="fileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.fileNaming"></a>

```typescript
public readonly fileNaming: PipelineSinkConfigFileNaming;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

Controls filename prefix/suffix and strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#file_naming PipelineSink#file_naming}

---

##### `jurisdiction`<sup>Optional</sup> <a name="jurisdiction" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.jurisdiction"></a>

```typescript
public readonly jurisdiction: string;
```

- *Type:* string

Jurisdiction this bucket is hosted in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#jurisdiction PipelineSink#jurisdiction}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Table namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#namespace PipelineSink#namespace}

---

##### `partitioning`<sup>Optional</sup> <a name="partitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.partitioning"></a>

```typescript
public readonly partitioning: PipelineSinkConfigPartitioning;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

Data-layout partitioning for sinks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#partitioning PipelineSink#partitioning}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Subpath within the bucket to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#path PipelineSink#path}

---

##### `rollingPolicy`<sup>Optional</sup> <a name="rollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.rollingPolicy"></a>

```typescript
public readonly rollingPolicy: PipelineSinkConfigRollingPolicy;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

Rolling policy for file sinks (when & why to close a file and open a new one).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#rolling_policy PipelineSink#rolling_policy}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#table_name PipelineSink#table_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Authentication token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#token PipelineSink#token}

---

### PipelineSinkConfigCredentials <a name="PipelineSinkConfigCredentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

const pipelineSinkConfigCredentials: pipelineSink.PipelineSinkConfigCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | Cloudflare Account ID for the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | Cloudflare Account ID for the bucket. |

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#access_key_id PipelineSink#access_key_id}

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#secret_access_key PipelineSink#secret_access_key}

---

### PipelineSinkConfigFileNaming <a name="PipelineSinkConfigFileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

const pipelineSinkConfigFileNaming: pipelineSink.PipelineSinkConfigFileNaming = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.prefix">prefix</a></code> | <code>string</code> | The prefix to use in file name. i.e prefix-<uuid>.parquet. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.strategy">strategy</a></code> | <code>string</code> | Filename generation strategy. Available values: "serial", "uuid", "uuid_v7", "ulid". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.suffix">suffix</a></code> | <code>string</code> | This will overwrite the default file suffix. i.e .parquet, use with caution. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The prefix to use in file name. i.e prefix-<uuid>.parquet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#prefix PipelineSink#prefix}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

Filename generation strategy. Available values: "serial", "uuid", "uuid_v7", "ulid".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#strategy PipelineSink#strategy}

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

This will overwrite the default file suffix. i.e .parquet, use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#suffix PipelineSink#suffix}

---

### PipelineSinkConfigPartitioning <a name="PipelineSinkConfigPartitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

const pipelineSinkConfigPartitioning: pipelineSink.PipelineSinkConfigPartitioning = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning.property.timePattern">timePattern</a></code> | <code>string</code> | The pattern of the date string. |

---

##### `timePattern`<sup>Optional</sup> <a name="timePattern" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning.property.timePattern"></a>

```typescript
public readonly timePattern: string;
```

- *Type:* string

The pattern of the date string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#time_pattern PipelineSink#time_pattern}

---

### PipelineSinkConfigRollingPolicy <a name="PipelineSinkConfigRollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

const pipelineSinkConfigRollingPolicy: pipelineSink.PipelineSinkConfigRollingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.fileSizeBytes">fileSizeBytes</a></code> | <code>number</code> | Files will be rolled after reaching this number of bytes. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.inactivitySeconds">inactivitySeconds</a></code> | <code>number</code> | Number of seconds of inactivity to wait before rolling over to a new file. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | Number of seconds to wait before rolling over to a new file. |

---

##### `fileSizeBytes`<sup>Optional</sup> <a name="fileSizeBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.fileSizeBytes"></a>

```typescript
public readonly fileSizeBytes: number;
```

- *Type:* number

Files will be rolled after reaching this number of bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#file_size_bytes PipelineSink#file_size_bytes}

---

##### `inactivitySeconds`<sup>Optional</sup> <a name="inactivitySeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.inactivitySeconds"></a>

```typescript
public readonly inactivitySeconds: number;
```

- *Type:* number

Number of seconds of inactivity to wait before rolling over to a new file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#inactivity_seconds PipelineSink#inactivity_seconds}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

Number of seconds to wait before rolling over to a new file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#interval_seconds PipelineSink#interval_seconds}

---

### PipelineSinkFormat <a name="PipelineSinkFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

const pipelineSinkFormat: pipelineSink.PipelineSinkFormat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.type">type</a></code> | <code>string</code> | Available values: "json", "parquet". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.compression">compression</a></code> | <code>string</code> | Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.decimalEncoding">decimalEncoding</a></code> | <code>string</code> | Available values: "number", "string", "bytes". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.rowGroupBytes">rowGroupBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | Available values: "rfc3339", "unix_millis". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.unstructured">unstructured</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#compression PipelineSink#compression}

---

##### `decimalEncoding`<sup>Optional</sup> <a name="decimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.decimalEncoding"></a>

```typescript
public readonly decimalEncoding: string;
```

- *Type:* string

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#decimal_encoding PipelineSink#decimal_encoding}

---

##### `rowGroupBytes`<sup>Optional</sup> <a name="rowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.rowGroupBytes"></a>

```typescript
public readonly rowGroupBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}.

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#timestamp_format PipelineSink#timestamp_format}

---

##### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.unstructured"></a>

```typescript
public readonly unstructured: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}.

---

### PipelineSinkSchema <a name="PipelineSinkSchema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

const pipelineSinkSchema: pipelineSink.PipelineSinkSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#fields PipelineSink#fields}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#format PipelineSink#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.inferred">inferred</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#inferred PipelineSink#inferred}. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.fields"></a>

```typescript
public readonly fields: IResolvable | PipelineSinkSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#fields PipelineSink#fields}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.format"></a>

```typescript
public readonly format: PipelineSinkSchemaFormat;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#format PipelineSink#format}.

---

##### `inferred`<sup>Optional</sup> <a name="inferred" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.inferred"></a>

```typescript
public readonly inferred: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#inferred PipelineSink#inferred}.

---

### PipelineSinkSchemaFields <a name="PipelineSinkSchemaFields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

const pipelineSinkSchemaFields: pipelineSink.PipelineSinkSchemaFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.type">type</a></code> | <code>string</code> | Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.metadataKey">metadataKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#metadata_key PipelineSink#metadata_key}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#name PipelineSink#name}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#required PipelineSink#required}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.sqlName">sqlName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#sql_name PipelineSink#sql_name}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.unit">unit</a></code> | <code>string</code> | Available values: "second", "millisecond", "microsecond", "nanosecond". |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `metadataKey`<sup>Optional</sup> <a name="metadataKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.metadataKey"></a>

```typescript
public readonly metadataKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#metadata_key PipelineSink#metadata_key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#name PipelineSink#name}.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#required PipelineSink#required}.

---

##### `sqlName`<sup>Optional</sup> <a name="sqlName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.sqlName"></a>

```typescript
public readonly sqlName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#sql_name PipelineSink#sql_name}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Available values: "second", "millisecond", "microsecond", "nanosecond".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#unit PipelineSink#unit}

---

### PipelineSinkSchemaFormat <a name="PipelineSinkSchemaFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

const pipelineSinkSchemaFormat: pipelineSink.PipelineSinkSchemaFormat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.type">type</a></code> | <code>string</code> | Available values: "json", "parquet". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.compression">compression</a></code> | <code>string</code> | Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.decimalEncoding">decimalEncoding</a></code> | <code>string</code> | Available values: "number", "string", "bytes". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.rowGroupBytes">rowGroupBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | Available values: "rfc3339", "unix_millis". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.unstructured">unstructured</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#compression PipelineSink#compression}

---

##### `decimalEncoding`<sup>Optional</sup> <a name="decimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.decimalEncoding"></a>

```typescript
public readonly decimalEncoding: string;
```

- *Type:* string

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#decimal_encoding PipelineSink#decimal_encoding}

---

##### `rowGroupBytes`<sup>Optional</sup> <a name="rowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.rowGroupBytes"></a>

```typescript
public readonly rowGroupBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}.

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#timestamp_format PipelineSink#timestamp_format}

---

##### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.unstructured"></a>

```typescript
public readonly unstructured: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}.

---

## Classes <a name="Classes" id="Classes"></a>

### PipelineSinkConfigAOutputReference <a name="PipelineSinkConfigAOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

new pipelineSink.PipelineSinkConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putFileNaming">putFileNaming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putPartitioning">putPartitioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putRollingPolicy">putRollingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetFileNaming">resetFileNaming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetJurisdiction">resetJurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPartitioning">resetPartitioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetRollingPolicy">resetRollingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetToken">resetToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCredentials` <a name="putCredentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putCredentials"></a>

```typescript
public putCredentials(value: PipelineSinkConfigCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

---

##### `putFileNaming` <a name="putFileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putFileNaming"></a>

```typescript
public putFileNaming(value: PipelineSinkConfigFileNaming): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putFileNaming.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

---

##### `putPartitioning` <a name="putPartitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putPartitioning"></a>

```typescript
public putPartitioning(value: PipelineSinkConfigPartitioning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putPartitioning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

---

##### `putRollingPolicy` <a name="putRollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putRollingPolicy"></a>

```typescript
public putRollingPolicy(value: PipelineSinkConfigRollingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putRollingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

---

##### `resetCredentials` <a name="resetCredentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetFileNaming` <a name="resetFileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetFileNaming"></a>

```typescript
public resetFileNaming(): void
```

##### `resetJurisdiction` <a name="resetJurisdiction" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetJurisdiction"></a>

```typescript
public resetJurisdiction(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPartitioning` <a name="resetPartitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPartitioning"></a>

```typescript
public resetPartitioning(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRollingPolicy` <a name="resetRollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetRollingPolicy"></a>

```typescript
public resetRollingPolicy(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference">PipelineSinkConfigCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNaming">fileNaming</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference">PipelineSinkConfigFileNamingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioning">partitioning</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference">PipelineSinkConfigPartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicy">rollingPolicy</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference">PipelineSinkConfigRollingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentialsInput">credentialsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNamingInput">fileNamingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdictionInput">jurisdictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioningInput">partitioningInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicyInput">rollingPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdiction">jurisdiction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentials"></a>

```typescript
public readonly credentials: PipelineSinkConfigCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference">PipelineSinkConfigCredentialsOutputReference</a>

---

##### `fileNaming`<sup>Required</sup> <a name="fileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNaming"></a>

```typescript
public readonly fileNaming: PipelineSinkConfigFileNamingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference">PipelineSinkConfigFileNamingOutputReference</a>

---

##### `partitioning`<sup>Required</sup> <a name="partitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioning"></a>

```typescript
public readonly partitioning: PipelineSinkConfigPartitioningOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference">PipelineSinkConfigPartitioningOutputReference</a>

---

##### `rollingPolicy`<sup>Required</sup> <a name="rollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicy"></a>

```typescript
public readonly rollingPolicy: PipelineSinkConfigRollingPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference">PipelineSinkConfigRollingPolicyOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: IResolvable | PipelineSinkConfigCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

---

##### `fileNamingInput`<sup>Optional</sup> <a name="fileNamingInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNamingInput"></a>

```typescript
public readonly fileNamingInput: IResolvable | PipelineSinkConfigFileNaming;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

---

##### `jurisdictionInput`<sup>Optional</sup> <a name="jurisdictionInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdictionInput"></a>

```typescript
public readonly jurisdictionInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `partitioningInput`<sup>Optional</sup> <a name="partitioningInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioningInput"></a>

```typescript
public readonly partitioningInput: IResolvable | PipelineSinkConfigPartitioning;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `rollingPolicyInput`<sup>Optional</sup> <a name="rollingPolicyInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicyInput"></a>

```typescript
public readonly rollingPolicyInput: IResolvable | PipelineSinkConfigRollingPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `jurisdiction`<sup>Required</sup> <a name="jurisdiction" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdiction"></a>

```typescript
public readonly jurisdiction: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PipelineSinkConfigA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

---


### PipelineSinkConfigCredentialsOutputReference <a name="PipelineSinkConfigCredentialsOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

new pipelineSink.PipelineSinkConfigCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyIdInput"></a>

```typescript
public readonly accessKeyIdInput: string;
```

- *Type:* string

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKeyInput"></a>

```typescript
public readonly secretAccessKeyInput: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PipelineSinkConfigCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

---


### PipelineSinkConfigFileNamingOutputReference <a name="PipelineSinkConfigFileNamingOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

new pipelineSink.PipelineSinkConfigFileNamingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetStrategy">resetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetStrategy"></a>

```typescript
public resetStrategy(): void
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetSuffix"></a>

```typescript
public resetSuffix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategyInput">strategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffixInput">suffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategyInput"></a>

```typescript
public readonly strategyInput: string;
```

- *Type:* string

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffixInput"></a>

```typescript
public readonly suffixInput: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PipelineSinkConfigFileNaming;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

---


### PipelineSinkConfigPartitioningOutputReference <a name="PipelineSinkConfigPartitioningOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

new pipelineSink.PipelineSinkConfigPartitioningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resetTimePattern">resetTimePattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimePattern` <a name="resetTimePattern" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resetTimePattern"></a>

```typescript
public resetTimePattern(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePatternInput">timePatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePattern">timePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timePatternInput`<sup>Optional</sup> <a name="timePatternInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePatternInput"></a>

```typescript
public readonly timePatternInput: string;
```

- *Type:* string

---

##### `timePattern`<sup>Required</sup> <a name="timePattern" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePattern"></a>

```typescript
public readonly timePattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PipelineSinkConfigPartitioning;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

---


### PipelineSinkConfigRollingPolicyOutputReference <a name="PipelineSinkConfigRollingPolicyOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

new pipelineSink.PipelineSinkConfigRollingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetFileSizeBytes">resetFileSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetInactivitySeconds">resetInactivitySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSizeBytes` <a name="resetFileSizeBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetFileSizeBytes"></a>

```typescript
public resetFileSizeBytes(): void
```

##### `resetInactivitySeconds` <a name="resetInactivitySeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetInactivitySeconds"></a>

```typescript
public resetInactivitySeconds(): void
```

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetIntervalSeconds"></a>

```typescript
public resetIntervalSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytesInput">fileSizeBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySecondsInput">inactivitySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytes">fileSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySeconds">inactivitySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSizeBytesInput`<sup>Optional</sup> <a name="fileSizeBytesInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytesInput"></a>

```typescript
public readonly fileSizeBytesInput: number;
```

- *Type:* number

---

##### `inactivitySecondsInput`<sup>Optional</sup> <a name="inactivitySecondsInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySecondsInput"></a>

```typescript
public readonly inactivitySecondsInput: number;
```

- *Type:* number

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `fileSizeBytes`<sup>Required</sup> <a name="fileSizeBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytes"></a>

```typescript
public readonly fileSizeBytes: number;
```

- *Type:* number

---

##### `inactivitySeconds`<sup>Required</sup> <a name="inactivitySeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySeconds"></a>

```typescript
public readonly inactivitySeconds: number;
```

- *Type:* number

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PipelineSinkConfigRollingPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

---


### PipelineSinkFormatOutputReference <a name="PipelineSinkFormatOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

new pipelineSink.PipelineSinkFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetDecimalEncoding">resetDecimalEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetRowGroupBytes">resetRowGroupBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetTimestampFormat">resetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetUnstructured">resetUnstructured</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetDecimalEncoding` <a name="resetDecimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetDecimalEncoding"></a>

```typescript
public resetDecimalEncoding(): void
```

##### `resetRowGroupBytes` <a name="resetRowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetRowGroupBytes"></a>

```typescript
public resetRowGroupBytes(): void
```

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetTimestampFormat"></a>

```typescript
public resetTimestampFormat(): void
```

##### `resetUnstructured` <a name="resetUnstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetUnstructured"></a>

```typescript
public resetUnstructured(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncodingInput">decimalEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytesInput">rowGroupBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormatInput">timestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructuredInput">unstructuredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncoding">decimalEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytes">rowGroupBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructured">unstructured</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `decimalEncodingInput`<sup>Optional</sup> <a name="decimalEncodingInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncodingInput"></a>

```typescript
public readonly decimalEncodingInput: string;
```

- *Type:* string

---

##### `rowGroupBytesInput`<sup>Optional</sup> <a name="rowGroupBytesInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytesInput"></a>

```typescript
public readonly rowGroupBytesInput: number;
```

- *Type:* number

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormatInput"></a>

```typescript
public readonly timestampFormatInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `unstructuredInput`<sup>Optional</sup> <a name="unstructuredInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructuredInput"></a>

```typescript
public readonly unstructuredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `decimalEncoding`<sup>Required</sup> <a name="decimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncoding"></a>

```typescript
public readonly decimalEncoding: string;
```

- *Type:* string

---

##### `rowGroupBytes`<sup>Required</sup> <a name="rowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytes"></a>

```typescript
public readonly rowGroupBytes: number;
```

- *Type:* number

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructured"></a>

```typescript
public readonly unstructured: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PipelineSinkFormat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

---


### PipelineSinkSchemaFieldsList <a name="PipelineSinkSchemaFieldsList" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

new pipelineSink.PipelineSinkSchemaFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.get"></a>

```typescript
public get(index: number): PipelineSinkSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PipelineSinkSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>[]

---


### PipelineSinkSchemaFieldsOutputReference <a name="PipelineSinkSchemaFieldsOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

new pipelineSink.PipelineSinkSchemaFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetMetadataKey">resetMetadataKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetSqlName">resetSqlName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetadataKey` <a name="resetMetadataKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetMetadataKey"></a>

```typescript
public resetMetadataKey(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetSqlName` <a name="resetSqlName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetSqlName"></a>

```typescript
public resetSqlName(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKeyInput">metadataKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlNameInput">sqlNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKey">metadataKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlName">sqlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metadataKeyInput`<sup>Optional</sup> <a name="metadataKeyInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKeyInput"></a>

```typescript
public readonly metadataKeyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sqlNameInput`<sup>Optional</sup> <a name="sqlNameInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlNameInput"></a>

```typescript
public readonly sqlNameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `metadataKey`<sup>Required</sup> <a name="metadataKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKey"></a>

```typescript
public readonly metadataKey: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sqlName`<sup>Required</sup> <a name="sqlName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlName"></a>

```typescript
public readonly sqlName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PipelineSinkSchemaFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>

---


### PipelineSinkSchemaFormatOutputReference <a name="PipelineSinkSchemaFormatOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

new pipelineSink.PipelineSinkSchemaFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetDecimalEncoding">resetDecimalEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetRowGroupBytes">resetRowGroupBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetTimestampFormat">resetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetUnstructured">resetUnstructured</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetDecimalEncoding` <a name="resetDecimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetDecimalEncoding"></a>

```typescript
public resetDecimalEncoding(): void
```

##### `resetRowGroupBytes` <a name="resetRowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetRowGroupBytes"></a>

```typescript
public resetRowGroupBytes(): void
```

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetTimestampFormat"></a>

```typescript
public resetTimestampFormat(): void
```

##### `resetUnstructured` <a name="resetUnstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetUnstructured"></a>

```typescript
public resetUnstructured(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncodingInput">decimalEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytesInput">rowGroupBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormatInput">timestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructuredInput">unstructuredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncoding">decimalEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytes">rowGroupBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructured">unstructured</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `decimalEncodingInput`<sup>Optional</sup> <a name="decimalEncodingInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncodingInput"></a>

```typescript
public readonly decimalEncodingInput: string;
```

- *Type:* string

---

##### `rowGroupBytesInput`<sup>Optional</sup> <a name="rowGroupBytesInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytesInput"></a>

```typescript
public readonly rowGroupBytesInput: number;
```

- *Type:* number

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormatInput"></a>

```typescript
public readonly timestampFormatInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `unstructuredInput`<sup>Optional</sup> <a name="unstructuredInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructuredInput"></a>

```typescript
public readonly unstructuredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `decimalEncoding`<sup>Required</sup> <a name="decimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncoding"></a>

```typescript
public readonly decimalEncoding: string;
```

- *Type:* string

---

##### `rowGroupBytes`<sup>Required</sup> <a name="rowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytes"></a>

```typescript
public readonly rowGroupBytes: number;
```

- *Type:* number

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructured"></a>

```typescript
public readonly unstructured: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PipelineSinkSchemaFormat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

---


### PipelineSinkSchemaOutputReference <a name="PipelineSinkSchemaOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer"></a>

```typescript
import { pipelineSink } from '@cdktn/provider-cloudflare'

new pipelineSink.PipelineSinkSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat">putFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetInferred">resetInferred</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFields"></a>

```typescript
public putFields(value: IResolvable | PipelineSinkSchemaFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>[]

---

##### `putFormat` <a name="putFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat"></a>

```typescript
public putFormat(value: PipelineSinkSchemaFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetInferred` <a name="resetInferred" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetInferred"></a>

```typescript
public resetInferred(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList">PipelineSinkSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference">PipelineSinkSchemaFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.formatInput">formatInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferredInput">inferredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferred">inferred</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fields"></a>

```typescript
public readonly fields: PipelineSinkSchemaFieldsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList">PipelineSinkSchemaFieldsList</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.format"></a>

```typescript
public readonly format: PipelineSinkSchemaFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference">PipelineSinkSchemaFormatOutputReference</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | PipelineSinkSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>[]

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: IResolvable | PipelineSinkSchemaFormat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

---

##### `inferredInput`<sup>Optional</sup> <a name="inferredInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferredInput"></a>

```typescript
public readonly inferredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inferred`<sup>Required</sup> <a name="inferred" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferred"></a>

```typescript
public readonly inferred: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PipelineSinkSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

---



