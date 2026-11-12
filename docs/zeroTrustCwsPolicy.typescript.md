# `zeroTrustCwsPolicy` Submodule <a name="`zeroTrustCwsPolicy` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCwsPolicy <a name="ZeroTrustCwsPolicy" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy cloudflare_zero_trust_cws_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.Initializer"></a>

```typescript
import { zeroTrustCwsPolicy } from '@cdktn/provider-cloudflare'

new zeroTrustCwsPolicy.ZeroTrustCwsPolicy(scope: Construct, id: string, config: ZeroTrustCwsPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig">ZeroTrustCwsPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig">ZeroTrustCwsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustCwsPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.isConstruct"></a>

```typescript
import { zeroTrustCwsPolicy } from '@cdktn/provider-cloudflare'

zeroTrustCwsPolicy.ZeroTrustCwsPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.isTerraformElement"></a>

```typescript
import { zeroTrustCwsPolicy } from '@cdktn/provider-cloudflare'

zeroTrustCwsPolicy.ZeroTrustCwsPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.isTerraformResource"></a>

```typescript
import { zeroTrustCwsPolicy } from '@cdktn/provider-cloudflare'

zeroTrustCwsPolicy.ZeroTrustCwsPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.generateConfigForImport"></a>

```typescript
import { zeroTrustCwsPolicy } from '@cdktn/provider-cloudflare'

zeroTrustCwsPolicy.ZeroTrustCwsPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ZeroTrustCwsPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustCwsPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustCwsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCwsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.packagePath">packagePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.entrypointInput">entrypointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.regoSourceInput">regoSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.regoSource">regoSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `packagePath`<sup>Required</sup> <a name="packagePath" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.packagePath"></a>

```typescript
public readonly packagePath: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `entrypointInput`<sup>Optional</sup> <a name="entrypointInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.entrypointInput"></a>

```typescript
public readonly entrypointInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regoSourceInput`<sup>Optional</sup> <a name="regoSourceInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.regoSourceInput"></a>

```typescript
public readonly regoSourceInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regoSource`<sup>Required</sup> <a name="regoSource" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.regoSource"></a>

```typescript
public readonly regoSource: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCwsPolicyConfig <a name="ZeroTrustCwsPolicyConfig" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.Initializer"></a>

```typescript
import { zeroTrustCwsPolicy } from '@cdktn/provider-cloudflare'

const zeroTrustCwsPolicyConfig: zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.entrypoint">entrypoint</a></code> | <code>string</code> | Non-function rule declared in rego_source. Evaluation uses data.<package_path>.<entrypoint>. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.filter">filter</a></code> | <code>string</code> | Filter expression that determines whether this policy applies. Maximum 4096 UTF-8 bytes. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.name">name</a></code> | <code>string</code> | Name of the policy. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.regoSource">regoSource</a></code> | <code>string</code> | Inline Rego source with a package beginning with "policy." Maximum 16384 UTF-8 bytes. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.description">description</a></code> | <code>string</code> | Optional free-form description. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy#account_id ZeroTrustCwsPolicy#account_id}

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string

Non-function rule declared in rego_source. Evaluation uses data.<package_path>.<entrypoint>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy#entrypoint ZeroTrustCwsPolicy#entrypoint}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Filter expression that determines whether this policy applies. Maximum 4096 UTF-8 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy#filter ZeroTrustCwsPolicy#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy#name ZeroTrustCwsPolicy#name}

---

##### `regoSource`<sup>Required</sup> <a name="regoSource" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.regoSource"></a>

```typescript
public readonly regoSource: string;
```

- *Type:* string

Inline Rego source with a package beginning with "policy." Maximum 16384 UTF-8 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy#rego_source ZeroTrustCwsPolicy#rego_source}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional free-form description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy#description ZeroTrustCwsPolicy#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicy.ZeroTrustCwsPolicyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy#tags ZeroTrustCwsPolicy#tags}

---



