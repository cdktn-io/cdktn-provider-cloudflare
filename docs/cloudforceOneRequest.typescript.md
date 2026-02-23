# `cloudforceOneRequest` Submodule <a name="`cloudforceOneRequest` Submodule" id="@cdktn/provider-cloudflare.cloudforceOneRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudforceOneRequest <a name="CloudforceOneRequest" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/cloudforce_one_request cloudflare_cloudforce_one_request}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer"></a>

```typescript
import { cloudforceOneRequest } from '@cdktn/provider-cloudflare'

new cloudforceOneRequest.CloudforceOneRequest(scope: Construct, id: string, config: CloudforceOneRequestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig">CloudforceOneRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig">CloudforceOneRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetRequestType">resetRequestType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetSummary">resetSummary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetTlp">resetTlp</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetContent` <a name="resetContent" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetRequestType` <a name="resetRequestType" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetRequestType"></a>

```typescript
public resetRequestType(): void
```

##### `resetSummary` <a name="resetSummary" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetSummary"></a>

```typescript
public resetSummary(): void
```

##### `resetTlp` <a name="resetTlp" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetTlp"></a>

```typescript
public resetTlp(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudforceOneRequest resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isConstruct"></a>

```typescript
import { cloudforceOneRequest } from '@cdktn/provider-cloudflare'

cloudforceOneRequest.CloudforceOneRequest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformElement"></a>

```typescript
import { cloudforceOneRequest } from '@cdktn/provider-cloudflare'

cloudforceOneRequest.CloudforceOneRequest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformResource"></a>

```typescript
import { cloudforceOneRequest } from '@cdktn/provider-cloudflare'

cloudforceOneRequest.CloudforceOneRequest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport"></a>

```typescript
import { cloudforceOneRequest } from '@cdktn/provider-cloudflare'

cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudforceOneRequest resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudforceOneRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudforceOneRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/cloudforce_one_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudforceOneRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.completed">completed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.messageTokens">messageTokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.readableId">readableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.request">request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tokens">tokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.updated">updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.priorityInput">priorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.requestTypeInput">requestTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.summaryInput">summaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tlpInput">tlpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.priority">priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.requestType">requestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tlp">tlp</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `completed`<sup>Required</sup> <a name="completed" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.completed"></a>

```typescript
public readonly completed: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `messageTokens`<sup>Required</sup> <a name="messageTokens" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.messageTokens"></a>

```typescript
public readonly messageTokens: number;
```

- *Type:* number

---

##### `readableId`<sup>Required</sup> <a name="readableId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.readableId"></a>

```typescript
public readonly readableId: string;
```

- *Type:* string

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.updated"></a>

```typescript
public readonly updated: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.priorityInput"></a>

```typescript
public readonly priorityInput: string;
```

- *Type:* string

---

##### `requestTypeInput`<sup>Optional</sup> <a name="requestTypeInput" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.requestTypeInput"></a>

```typescript
public readonly requestTypeInput: string;
```

- *Type:* string

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.summaryInput"></a>

```typescript
public readonly summaryInput: string;
```

- *Type:* string

---

##### `tlpInput`<sup>Optional</sup> <a name="tlpInput" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tlpInput"></a>

```typescript
public readonly tlpInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

---

##### `requestType`<sup>Required</sup> <a name="requestType" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.requestType"></a>

```typescript
public readonly requestType: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `tlp`<sup>Required</sup> <a name="tlp" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tlp"></a>

```typescript
public readonly tlp: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudforceOneRequestConfig <a name="CloudforceOneRequestConfig" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.Initializer"></a>

```typescript
import { cloudforceOneRequest } from '@cdktn/provider-cloudflare'

const cloudforceOneRequestConfig: cloudforceOneRequest.CloudforceOneRequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.content">content</a></code> | <code>string</code> | Request content. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.priority">priority</a></code> | <code>string</code> | Priority for analyzing the request. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.requestType">requestType</a></code> | <code>string</code> | Requested information from request. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.summary">summary</a></code> | <code>string</code> | Brief description of the request. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.tlp">tlp</a></code> | <code>string</code> | The CISA defined Traffic Light Protocol (TLP). Available values: "clear", "amber", "amber-strict", "green", "red". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/cloudforce_one_request#account_id CloudforceOneRequest#account_id}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Request content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/cloudforce_one_request#content CloudforceOneRequest#content}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

Priority for analyzing the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/cloudforce_one_request#priority CloudforceOneRequest#priority}

---

##### `requestType`<sup>Optional</sup> <a name="requestType" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.requestType"></a>

```typescript
public readonly requestType: string;
```

- *Type:* string

Requested information from request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/cloudforce_one_request#request_type CloudforceOneRequest#request_type}

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

Brief description of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/cloudforce_one_request#summary CloudforceOneRequest#summary}

---

##### `tlp`<sup>Optional</sup> <a name="tlp" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.tlp"></a>

```typescript
public readonly tlp: string;
```

- *Type:* string

The CISA defined Traffic Light Protocol (TLP). Available values: "clear", "amber", "amber-strict", "green", "red".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/cloudforce_one_request#tlp CloudforceOneRequest#tlp}

---



