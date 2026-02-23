# `managedTransforms` Submodule <a name="`managedTransforms` Submodule" id="@cdktn/provider-cloudflare.managedTransforms"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedTransforms <a name="ManagedTransforms" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/managed_transforms cloudflare_managed_transforms}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.Initializer"></a>

```typescript
import { managedTransforms } from '@cdktn/provider-cloudflare'

new managedTransforms.ManagedTransforms(scope: Construct, id: string, config: ManagedTransformsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig">ManagedTransformsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig">ManagedTransformsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.putManagedRequestHeaders">putManagedRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.putManagedResponseHeaders">putManagedResponseHeaders</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putManagedRequestHeaders` <a name="putManagedRequestHeaders" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.putManagedRequestHeaders"></a>

```typescript
public putManagedRequestHeaders(value: IResolvable | ManagedTransformsManagedRequestHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.putManagedRequestHeaders.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeaders">ManagedTransformsManagedRequestHeaders</a>[]

---

##### `putManagedResponseHeaders` <a name="putManagedResponseHeaders" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.putManagedResponseHeaders"></a>

```typescript
public putManagedResponseHeaders(value: IResolvable | ManagedTransformsManagedResponseHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.putManagedResponseHeaders.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeaders">ManagedTransformsManagedResponseHeaders</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ManagedTransforms resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.isConstruct"></a>

```typescript
import { managedTransforms } from '@cdktn/provider-cloudflare'

managedTransforms.ManagedTransforms.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.isTerraformElement"></a>

```typescript
import { managedTransforms } from '@cdktn/provider-cloudflare'

managedTransforms.ManagedTransforms.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.isTerraformResource"></a>

```typescript
import { managedTransforms } from '@cdktn/provider-cloudflare'

managedTransforms.ManagedTransforms.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.generateConfigForImport"></a>

```typescript
import { managedTransforms } from '@cdktn/provider-cloudflare'

managedTransforms.ManagedTransforms.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ManagedTransforms resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedTransforms to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedTransforms that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/managed_transforms#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ManagedTransforms to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.managedRequestHeaders">managedRequestHeaders</a></code> | <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList">ManagedTransformsManagedRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.managedResponseHeaders">managedResponseHeaders</a></code> | <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList">ManagedTransformsManagedResponseHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.managedRequestHeadersInput">managedRequestHeadersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeaders">ManagedTransformsManagedRequestHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.managedResponseHeadersInput">managedResponseHeadersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeaders">ManagedTransformsManagedResponseHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedRequestHeaders`<sup>Required</sup> <a name="managedRequestHeaders" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.managedRequestHeaders"></a>

```typescript
public readonly managedRequestHeaders: ManagedTransformsManagedRequestHeadersList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList">ManagedTransformsManagedRequestHeadersList</a>

---

##### `managedResponseHeaders`<sup>Required</sup> <a name="managedResponseHeaders" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.managedResponseHeaders"></a>

```typescript
public readonly managedResponseHeaders: ManagedTransformsManagedResponseHeadersList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList">ManagedTransformsManagedResponseHeadersList</a>

---

##### `managedRequestHeadersInput`<sup>Optional</sup> <a name="managedRequestHeadersInput" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.managedRequestHeadersInput"></a>

```typescript
public readonly managedRequestHeadersInput: IResolvable | ManagedTransformsManagedRequestHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeaders">ManagedTransformsManagedRequestHeaders</a>[]

---

##### `managedResponseHeadersInput`<sup>Optional</sup> <a name="managedResponseHeadersInput" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.managedResponseHeadersInput"></a>

```typescript
public readonly managedResponseHeadersInput: IResolvable | ManagedTransformsManagedResponseHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeaders">ManagedTransformsManagedResponseHeaders</a>[]

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransforms.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedTransformsConfig <a name="ManagedTransformsConfig" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.Initializer"></a>

```typescript
import { managedTransforms } from '@cdktn/provider-cloudflare'

const managedTransformsConfig: managedTransforms.ManagedTransformsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.managedRequestHeaders">managedRequestHeaders</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeaders">ManagedTransformsManagedRequestHeaders</a>[]</code> | The list of Managed Request Transforms. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.managedResponseHeaders">managedResponseHeaders</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeaders">ManagedTransformsManagedResponseHeaders</a>[]</code> | The list of Managed Response Transforms. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The unique ID of the zone. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `managedRequestHeaders`<sup>Required</sup> <a name="managedRequestHeaders" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.managedRequestHeaders"></a>

```typescript
public readonly managedRequestHeaders: IResolvable | ManagedTransformsManagedRequestHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeaders">ManagedTransformsManagedRequestHeaders</a>[]

The list of Managed Request Transforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/managed_transforms#managed_request_headers ManagedTransforms#managed_request_headers}

---

##### `managedResponseHeaders`<sup>Required</sup> <a name="managedResponseHeaders" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.managedResponseHeaders"></a>

```typescript
public readonly managedResponseHeaders: IResolvable | ManagedTransformsManagedResponseHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeaders">ManagedTransformsManagedResponseHeaders</a>[]

The list of Managed Response Transforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/managed_transforms#managed_response_headers ManagedTransforms#managed_response_headers}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The unique ID of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/managed_transforms#zone_id ManagedTransforms#zone_id}

---

### ManagedTransformsManagedRequestHeaders <a name="ManagedTransformsManagedRequestHeaders" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeaders.Initializer"></a>

```typescript
import { managedTransforms } from '@cdktn/provider-cloudflare'

const managedTransformsManagedRequestHeaders: managedTransforms.ManagedTransformsManagedRequestHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeaders.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the Managed Transform is enabled. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeaders.property.id">id</a></code> | <code>string</code> | The human-readable identifier of the Managed Transform. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeaders.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the Managed Transform is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/managed_transforms#enabled ManagedTransforms#enabled}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeaders.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The human-readable identifier of the Managed Transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/managed_transforms#id ManagedTransforms#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ManagedTransformsManagedResponseHeaders <a name="ManagedTransformsManagedResponseHeaders" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeaders.Initializer"></a>

```typescript
import { managedTransforms } from '@cdktn/provider-cloudflare'

const managedTransformsManagedResponseHeaders: managedTransforms.ManagedTransformsManagedResponseHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeaders.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the Managed Transform is enabled. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeaders.property.id">id</a></code> | <code>string</code> | The human-readable identifier of the Managed Transform. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeaders.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the Managed Transform is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/managed_transforms#enabled ManagedTransforms#enabled}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeaders.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The human-readable identifier of the Managed Transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/managed_transforms#id ManagedTransforms#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedTransformsManagedRequestHeadersList <a name="ManagedTransformsManagedRequestHeadersList" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.Initializer"></a>

```typescript
import { managedTransforms } from '@cdktn/provider-cloudflare'

new managedTransforms.ManagedTransformsManagedRequestHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.get"></a>

```typescript
public get(index: number): ManagedTransformsManagedRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeaders">ManagedTransformsManagedRequestHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedTransformsManagedRequestHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeaders">ManagedTransformsManagedRequestHeaders</a>[]

---


### ManagedTransformsManagedRequestHeadersOutputReference <a name="ManagedTransformsManagedRequestHeadersOutputReference" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.Initializer"></a>

```typescript
import { managedTransforms } from '@cdktn/provider-cloudflare'

new managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeaders">ManagedTransformsManagedRequestHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedTransformsManagedRequestHeaders;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedRequestHeaders">ManagedTransformsManagedRequestHeaders</a>

---


### ManagedTransformsManagedResponseHeadersList <a name="ManagedTransformsManagedResponseHeadersList" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.Initializer"></a>

```typescript
import { managedTransforms } from '@cdktn/provider-cloudflare'

new managedTransforms.ManagedTransformsManagedResponseHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.get"></a>

```typescript
public get(index: number): ManagedTransformsManagedResponseHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeaders">ManagedTransformsManagedResponseHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedTransformsManagedResponseHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeaders">ManagedTransformsManagedResponseHeaders</a>[]

---


### ManagedTransformsManagedResponseHeadersOutputReference <a name="ManagedTransformsManagedResponseHeadersOutputReference" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.Initializer"></a>

```typescript
import { managedTransforms } from '@cdktn/provider-cloudflare'

new managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeaders">ManagedTransformsManagedResponseHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedTransformsManagedResponseHeaders;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.managedTransforms.ManagedTransformsManagedResponseHeaders">ManagedTransformsManagedResponseHeaders</a>

---



