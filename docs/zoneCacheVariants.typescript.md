# `zoneCacheVariants` Submodule <a name="`zoneCacheVariants` Submodule" id="@cdktn/provider-cloudflare.zoneCacheVariants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneCacheVariants <a name="ZoneCacheVariants" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zone_cache_variants cloudflare_zone_cache_variants}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer"></a>

```typescript
import { zoneCacheVariants } from '@cdktn/provider-cloudflare'

new zoneCacheVariants.ZoneCacheVariants(scope: Construct, id: string, config: ZoneCacheVariantsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig">ZoneCacheVariantsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig">ZoneCacheVariantsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue">putValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putValue` <a name="putValue" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue"></a>

```typescript
public putValue(value: ZoneCacheVariantsValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZoneCacheVariants resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct"></a>

```typescript
import { zoneCacheVariants } from '@cdktn/provider-cloudflare'

zoneCacheVariants.ZoneCacheVariants.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement"></a>

```typescript
import { zoneCacheVariants } from '@cdktn/provider-cloudflare'

zoneCacheVariants.ZoneCacheVariants.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource"></a>

```typescript
import { zoneCacheVariants } from '@cdktn/provider-cloudflare'

zoneCacheVariants.ZoneCacheVariants.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport"></a>

```typescript
import { zoneCacheVariants } from '@cdktn/provider-cloudflare'

zoneCacheVariants.ZoneCacheVariants.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ZoneCacheVariants resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZoneCacheVariants to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZoneCacheVariants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zone_cache_variants#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZoneCacheVariants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.editable">editable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.value">value</a></code> | <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference">ZoneCacheVariantsValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.valueInput">valueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `editable`<sup>Required</sup> <a name="editable" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.editable"></a>

```typescript
public readonly editable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.value"></a>

```typescript
public readonly value: ZoneCacheVariantsValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference">ZoneCacheVariantsValueOutputReference</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.valueInput"></a>

```typescript
public readonly valueInput: IResolvable | ZoneCacheVariantsValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneCacheVariantsConfig <a name="ZoneCacheVariantsConfig" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.Initializer"></a>

```typescript
import { zoneCacheVariants } from '@cdktn/provider-cloudflare'

const zoneCacheVariantsConfig: zoneCacheVariants.ZoneCacheVariantsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.value">value</a></code> | <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a></code> | Value of the zone setting. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.value"></a>

```typescript
public readonly value: ZoneCacheVariantsValue;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>

Value of the zone setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zone_cache_variants#value ZoneCacheVariants#value}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zone_cache_variants#zone_id ZoneCacheVariants#zone_id}

---

### ZoneCacheVariantsValue <a name="ZoneCacheVariantsValue" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.Initializer"></a>

```typescript
import { zoneCacheVariants } from '@cdktn/provider-cloudflare'

const zoneCacheVariantsValue: zoneCacheVariants.ZoneCacheVariantsValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.avif">avif</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for avif. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.bmp">bmp</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for bmp. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.gif">gif</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for gif. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jp2">jp2</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for jp2. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpeg">jpeg</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for jpeg. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg">jpg</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for jpg. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg2">jpg2</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for jpg2. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.png">png</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for png. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tif">tif</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for tif. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tiff">tiff</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for tiff. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.webp">webp</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for webp. |

---

##### `avif`<sup>Optional</sup> <a name="avif" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.avif"></a>

```typescript
public readonly avif: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for avif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zone_cache_variants#avif ZoneCacheVariants#avif}

---

##### `bmp`<sup>Optional</sup> <a name="bmp" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.bmp"></a>

```typescript
public readonly bmp: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for bmp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zone_cache_variants#bmp ZoneCacheVariants#bmp}

---

##### `gif`<sup>Optional</sup> <a name="gif" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.gif"></a>

```typescript
public readonly gif: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for gif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zone_cache_variants#gif ZoneCacheVariants#gif}

---

##### `jp2`<sup>Optional</sup> <a name="jp2" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jp2"></a>

```typescript
public readonly jp2: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for jp2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zone_cache_variants#jp2 ZoneCacheVariants#jp2}

---

##### `jpeg`<sup>Optional</sup> <a name="jpeg" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpeg"></a>

```typescript
public readonly jpeg: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for jpeg.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zone_cache_variants#jpeg ZoneCacheVariants#jpeg}

---

##### `jpg`<sup>Optional</sup> <a name="jpg" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg"></a>

```typescript
public readonly jpg: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for jpg.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zone_cache_variants#jpg ZoneCacheVariants#jpg}

---

##### `jpg2`<sup>Optional</sup> <a name="jpg2" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg2"></a>

```typescript
public readonly jpg2: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for jpg2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zone_cache_variants#jpg2 ZoneCacheVariants#jpg2}

---

##### `png`<sup>Optional</sup> <a name="png" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.png"></a>

```typescript
public readonly png: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zone_cache_variants#png ZoneCacheVariants#png}

---

##### `tif`<sup>Optional</sup> <a name="tif" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tif"></a>

```typescript
public readonly tif: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for tif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zone_cache_variants#tif ZoneCacheVariants#tif}

---

##### `tiff`<sup>Optional</sup> <a name="tiff" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tiff"></a>

```typescript
public readonly tiff: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for tiff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zone_cache_variants#tiff ZoneCacheVariants#tiff}

---

##### `webp`<sup>Optional</sup> <a name="webp" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.webp"></a>

```typescript
public readonly webp: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zone_cache_variants#webp ZoneCacheVariants#webp}

---

## Classes <a name="Classes" id="Classes"></a>

### ZoneCacheVariantsValueOutputReference <a name="ZoneCacheVariantsValueOutputReference" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer"></a>

```typescript
import { zoneCacheVariants } from '@cdktn/provider-cloudflare'

new zoneCacheVariants.ZoneCacheVariantsValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetAvif">resetAvif</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetBmp">resetBmp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetGif">resetGif</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJp2">resetJp2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpeg">resetJpeg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg">resetJpg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg2">resetJpg2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetPng">resetPng</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTif">resetTif</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTiff">resetTiff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetWebp">resetWebp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvif` <a name="resetAvif" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetAvif"></a>

```typescript
public resetAvif(): void
```

##### `resetBmp` <a name="resetBmp" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetBmp"></a>

```typescript
public resetBmp(): void
```

##### `resetGif` <a name="resetGif" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetGif"></a>

```typescript
public resetGif(): void
```

##### `resetJp2` <a name="resetJp2" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJp2"></a>

```typescript
public resetJp2(): void
```

##### `resetJpeg` <a name="resetJpeg" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpeg"></a>

```typescript
public resetJpeg(): void
```

##### `resetJpg` <a name="resetJpg" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg"></a>

```typescript
public resetJpg(): void
```

##### `resetJpg2` <a name="resetJpg2" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg2"></a>

```typescript
public resetJpg2(): void
```

##### `resetPng` <a name="resetPng" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetPng"></a>

```typescript
public resetPng(): void
```

##### `resetTif` <a name="resetTif" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTif"></a>

```typescript
public resetTif(): void
```

##### `resetTiff` <a name="resetTiff" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTiff"></a>

```typescript
public resetTiff(): void
```

##### `resetWebp` <a name="resetWebp" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetWebp"></a>

```typescript
public resetWebp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avifInput">avifInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmpInput">bmpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gifInput">gifInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2Input">jp2Input</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpegInput">jpegInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2Input">jpg2Input</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpgInput">jpgInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.pngInput">pngInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiffInput">tiffInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tifInput">tifInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webpInput">webpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avif">avif</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmp">bmp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gif">gif</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2">jp2</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpeg">jpeg</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg">jpg</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2">jpg2</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.png">png</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tif">tif</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiff">tiff</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webp">webp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avifInput`<sup>Optional</sup> <a name="avifInput" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avifInput"></a>

```typescript
public readonly avifInput: string[];
```

- *Type:* string[]

---

##### `bmpInput`<sup>Optional</sup> <a name="bmpInput" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmpInput"></a>

```typescript
public readonly bmpInput: string[];
```

- *Type:* string[]

---

##### `gifInput`<sup>Optional</sup> <a name="gifInput" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gifInput"></a>

```typescript
public readonly gifInput: string[];
```

- *Type:* string[]

---

##### `jp2Input`<sup>Optional</sup> <a name="jp2Input" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2Input"></a>

```typescript
public readonly jp2Input: string[];
```

- *Type:* string[]

---

##### `jpegInput`<sup>Optional</sup> <a name="jpegInput" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpegInput"></a>

```typescript
public readonly jpegInput: string[];
```

- *Type:* string[]

---

##### `jpg2Input`<sup>Optional</sup> <a name="jpg2Input" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2Input"></a>

```typescript
public readonly jpg2Input: string[];
```

- *Type:* string[]

---

##### `jpgInput`<sup>Optional</sup> <a name="jpgInput" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpgInput"></a>

```typescript
public readonly jpgInput: string[];
```

- *Type:* string[]

---

##### `pngInput`<sup>Optional</sup> <a name="pngInput" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.pngInput"></a>

```typescript
public readonly pngInput: string[];
```

- *Type:* string[]

---

##### `tiffInput`<sup>Optional</sup> <a name="tiffInput" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiffInput"></a>

```typescript
public readonly tiffInput: string[];
```

- *Type:* string[]

---

##### `tifInput`<sup>Optional</sup> <a name="tifInput" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tifInput"></a>

```typescript
public readonly tifInput: string[];
```

- *Type:* string[]

---

##### `webpInput`<sup>Optional</sup> <a name="webpInput" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webpInput"></a>

```typescript
public readonly webpInput: string[];
```

- *Type:* string[]

---

##### `avif`<sup>Required</sup> <a name="avif" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avif"></a>

```typescript
public readonly avif: string[];
```

- *Type:* string[]

---

##### `bmp`<sup>Required</sup> <a name="bmp" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmp"></a>

```typescript
public readonly bmp: string[];
```

- *Type:* string[]

---

##### `gif`<sup>Required</sup> <a name="gif" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gif"></a>

```typescript
public readonly gif: string[];
```

- *Type:* string[]

---

##### `jp2`<sup>Required</sup> <a name="jp2" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2"></a>

```typescript
public readonly jp2: string[];
```

- *Type:* string[]

---

##### `jpeg`<sup>Required</sup> <a name="jpeg" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpeg"></a>

```typescript
public readonly jpeg: string[];
```

- *Type:* string[]

---

##### `jpg`<sup>Required</sup> <a name="jpg" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg"></a>

```typescript
public readonly jpg: string[];
```

- *Type:* string[]

---

##### `jpg2`<sup>Required</sup> <a name="jpg2" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2"></a>

```typescript
public readonly jpg2: string[];
```

- *Type:* string[]

---

##### `png`<sup>Required</sup> <a name="png" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.png"></a>

```typescript
public readonly png: string[];
```

- *Type:* string[]

---

##### `tif`<sup>Required</sup> <a name="tif" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tif"></a>

```typescript
public readonly tif: string[];
```

- *Type:* string[]

---

##### `tiff`<sup>Required</sup> <a name="tiff" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiff"></a>

```typescript
public readonly tiff: string[];
```

- *Type:* string[]

---

##### `webp`<sup>Required</sup> <a name="webp" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webp"></a>

```typescript
public readonly webp: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZoneCacheVariantsValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>

---



