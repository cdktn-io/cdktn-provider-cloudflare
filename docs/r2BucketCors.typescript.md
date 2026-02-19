# `r2BucketCors` Submodule <a name="`r2BucketCors` Submodule" id="@cdktn/provider-cloudflare.r2BucketCors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### R2BucketCors <a name="R2BucketCors" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/r2_bucket_cors cloudflare_r2_bucket_cors}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.Initializer"></a>

```typescript
import { r2BucketCors } from '@cdktn/provider-cloudflare'

new r2BucketCors.R2BucketCors(scope: Construct, id: string, config: R2BucketCorsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig">R2BucketCorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig">R2BucketCorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.resetJurisdiction">resetJurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.resetRules">resetRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.putRules"></a>

```typescript
public putRules(value: IResolvable | R2BucketCorsRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules">R2BucketCorsRules</a>[]

---

##### `resetJurisdiction` <a name="resetJurisdiction" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.resetJurisdiction"></a>

```typescript
public resetJurisdiction(): void
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.resetRules"></a>

```typescript
public resetRules(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a R2BucketCors resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.isConstruct"></a>

```typescript
import { r2BucketCors } from '@cdktn/provider-cloudflare'

r2BucketCors.R2BucketCors.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.isTerraformElement"></a>

```typescript
import { r2BucketCors } from '@cdktn/provider-cloudflare'

r2BucketCors.R2BucketCors.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.isTerraformResource"></a>

```typescript
import { r2BucketCors } from '@cdktn/provider-cloudflare'

r2BucketCors.R2BucketCors.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.generateConfigForImport"></a>

```typescript
import { r2BucketCors } from '@cdktn/provider-cloudflare'

r2BucketCors.R2BucketCors.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a R2BucketCors resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the R2BucketCors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing R2BucketCors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/r2_bucket_cors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the R2BucketCors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList">R2BucketCorsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.jurisdictionInput">jurisdictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules">R2BucketCorsRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.jurisdiction">jurisdiction</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.rules"></a>

```typescript
public readonly rules: R2BucketCorsRulesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList">R2BucketCorsRulesList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `jurisdictionInput`<sup>Optional</sup> <a name="jurisdictionInput" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.jurisdictionInput"></a>

```typescript
public readonly jurisdictionInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | R2BucketCorsRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules">R2BucketCorsRules</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `jurisdiction`<sup>Required</sup> <a name="jurisdiction" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.jurisdiction"></a>

```typescript
public readonly jurisdiction: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCors.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### R2BucketCorsConfig <a name="R2BucketCorsConfig" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.Initializer"></a>

```typescript
import { r2BucketCors } from '@cdktn/provider-cloudflare'

const r2BucketCorsConfig: r2BucketCors.R2BucketCorsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.accountId">accountId</a></code> | <code>string</code> | Account ID. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.bucketName">bucketName</a></code> | <code>string</code> | Name of the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.jurisdiction">jurisdiction</a></code> | <code>string</code> | Jurisdiction of the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules">R2BucketCorsRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/r2_bucket_cors#rules R2BucketCors#rules}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/r2_bucket_cors#account_id R2BucketCors#account_id}

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/r2_bucket_cors#bucket_name R2BucketCors#bucket_name}

---

##### `jurisdiction`<sup>Optional</sup> <a name="jurisdiction" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.jurisdiction"></a>

```typescript
public readonly jurisdiction: string;
```

- *Type:* string

Jurisdiction of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/r2_bucket_cors#jurisdiction R2BucketCors#jurisdiction}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | R2BucketCorsRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules">R2BucketCorsRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/r2_bucket_cors#rules R2BucketCors#rules}.

---

### R2BucketCorsRules <a name="R2BucketCorsRules" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules.Initializer"></a>

```typescript
import { r2BucketCors } from '@cdktn/provider-cloudflare'

const r2BucketCorsRules: r2BucketCors.R2BucketCorsRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules.property.allowed">allowed</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowed">R2BucketCorsRulesAllowed</a></code> | Object specifying allowed origins, methods and headers for this CORS rule. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | Specifies the headers that can be exposed back, and accessed by, the JavaScript making the cross-origin request. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules.property.id">id</a></code> | <code>string</code> | Identifier for this rule. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>number</code> | Specifies the amount of time (in seconds) browsers are allowed to cache CORS preflight responses. |

---

##### `allowed`<sup>Required</sup> <a name="allowed" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules.property.allowed"></a>

```typescript
public readonly allowed: R2BucketCorsRulesAllowed;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowed">R2BucketCorsRulesAllowed</a>

Object specifying allowed origins, methods and headers for this CORS rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/r2_bucket_cors#allowed R2BucketCors#allowed}

---

##### `exposeHeaders`<sup>Optional</sup> <a name="exposeHeaders" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

Specifies the headers that can be exposed back, and accessed by, the JavaScript making the cross-origin request.

If you need to access headers beyond the safelisted response headers, such as Content-Encoding or cf-cache-status, you must specify it here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/r2_bucket_cors#expose_headers R2BucketCors#expose_headers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Identifier for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/r2_bucket_cors#id R2BucketCors#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxAgeSeconds`<sup>Optional</sup> <a name="maxAgeSeconds" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules.property.maxAgeSeconds"></a>

```typescript
public readonly maxAgeSeconds: number;
```

- *Type:* number

Specifies the amount of time (in seconds) browsers are allowed to cache CORS preflight responses.

Browsers may limit this to 2 hours or less, even if the maximum value (86400) is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/r2_bucket_cors#max_age_seconds R2BucketCors#max_age_seconds}

---

### R2BucketCorsRulesAllowed <a name="R2BucketCorsRulesAllowed" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowed.Initializer"></a>

```typescript
import { r2BucketCors } from '@cdktn/provider-cloudflare'

const r2BucketCorsRulesAllowed: r2BucketCors.R2BucketCorsRulesAllowed = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowed.property.methods">methods</a></code> | <code>string[]</code> | Specifies the value for the Access-Control-Allow-Methods header R2 sets when requesting objects in a bucket from a browser. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowed.property.origins">origins</a></code> | <code>string[]</code> | Specifies the value for the Access-Control-Allow-Origin header R2 sets when requesting objects in a bucket from a browser. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowed.property.headers">headers</a></code> | <code>string[]</code> | Specifies the value for the Access-Control-Allow-Headers header R2 sets when requesting objects in this bucket from a browser. |

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowed.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

Specifies the value for the Access-Control-Allow-Methods header R2 sets when requesting objects in a bucket from a browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/r2_bucket_cors#methods R2BucketCors#methods}

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowed.property.origins"></a>

```typescript
public readonly origins: string[];
```

- *Type:* string[]

Specifies the value for the Access-Control-Allow-Origin header R2 sets when requesting objects in a bucket from a browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/r2_bucket_cors#origins R2BucketCors#origins}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowed.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

Specifies the value for the Access-Control-Allow-Headers header R2 sets when requesting objects in this bucket from a browser.

Cross-origin requests that include custom headers (e.g. x-user-id) should specify these headers as AllowedHeaders.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/r2_bucket_cors#headers R2BucketCors#headers}

---

## Classes <a name="Classes" id="Classes"></a>

### R2BucketCorsRulesAllowedOutputReference <a name="R2BucketCorsRulesAllowedOutputReference" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.Initializer"></a>

```typescript
import { r2BucketCors } from '@cdktn/provider-cloudflare'

new r2BucketCors.R2BucketCorsRulesAllowedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaders` <a name="resetHeaders" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.headersInput">headersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.methodsInput">methodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.originsInput">originsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.headers">headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.methods">methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.origins">origins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowed">R2BucketCorsRulesAllowed</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: string[];
```

- *Type:* string[]

---

##### `methodsInput`<sup>Optional</sup> <a name="methodsInput" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.methodsInput"></a>

```typescript
public readonly methodsInput: string[];
```

- *Type:* string[]

---

##### `originsInput`<sup>Optional</sup> <a name="originsInput" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.originsInput"></a>

```typescript
public readonly originsInput: string[];
```

- *Type:* string[]

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.origins"></a>

```typescript
public readonly origins: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | R2BucketCorsRulesAllowed;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowed">R2BucketCorsRulesAllowed</a>

---


### R2BucketCorsRulesList <a name="R2BucketCorsRulesList" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.Initializer"></a>

```typescript
import { r2BucketCors } from '@cdktn/provider-cloudflare'

new r2BucketCors.R2BucketCorsRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.get"></a>

```typescript
public get(index: number): R2BucketCorsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules">R2BucketCorsRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | R2BucketCorsRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules">R2BucketCorsRules</a>[]

---


### R2BucketCorsRulesOutputReference <a name="R2BucketCorsRulesOutputReference" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.Initializer"></a>

```typescript
import { r2BucketCors } from '@cdktn/provider-cloudflare'

new r2BucketCors.R2BucketCorsRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.putAllowed">putAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.resetExposeHeaders">resetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.resetMaxAgeSeconds">resetMaxAgeSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowed` <a name="putAllowed" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.putAllowed"></a>

```typescript
public putAllowed(value: R2BucketCorsRulesAllowed): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.putAllowed.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowed">R2BucketCorsRulesAllowed</a>

---

##### `resetExposeHeaders` <a name="resetExposeHeaders" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.resetExposeHeaders"></a>

```typescript
public resetExposeHeaders(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxAgeSeconds` <a name="resetMaxAgeSeconds" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.resetMaxAgeSeconds"></a>

```typescript
public resetMaxAgeSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.allowed">allowed</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference">R2BucketCorsRulesAllowedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.allowedInput">allowedInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowed">R2BucketCorsRulesAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.exposeHeadersInput">exposeHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.maxAgeSecondsInput">maxAgeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules">R2BucketCorsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowed`<sup>Required</sup> <a name="allowed" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.allowed"></a>

```typescript
public readonly allowed: R2BucketCorsRulesAllowedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowedOutputReference">R2BucketCorsRulesAllowedOutputReference</a>

---

##### `allowedInput`<sup>Optional</sup> <a name="allowedInput" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.allowedInput"></a>

```typescript
public readonly allowedInput: IResolvable | R2BucketCorsRulesAllowed;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesAllowed">R2BucketCorsRulesAllowed</a>

---

##### `exposeHeadersInput`<sup>Optional</sup> <a name="exposeHeadersInput" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.exposeHeadersInput"></a>

```typescript
public readonly exposeHeadersInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxAgeSecondsInput`<sup>Optional</sup> <a name="maxAgeSecondsInput" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.maxAgeSecondsInput"></a>

```typescript
public readonly maxAgeSecondsInput: number;
```

- *Type:* number

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxAgeSeconds`<sup>Required</sup> <a name="maxAgeSeconds" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.maxAgeSeconds"></a>

```typescript
public readonly maxAgeSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | R2BucketCorsRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.r2BucketCors.R2BucketCorsRules">R2BucketCorsRules</a>

---



