# `zeroTrustCwsBasicAuthSecret` Submodule <a name="`zeroTrustCwsBasicAuthSecret` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCwsBasicAuthSecret <a name="ZeroTrustCwsBasicAuthSecret" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_basic_auth_secret cloudflare_zero_trust_cws_basic_auth_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.Initializer"></a>

```typescript
import { zeroTrustCwsBasicAuthSecret } from '@cdktn/provider-cloudflare'

new zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret(scope: Construct, id: string, config: ZeroTrustCwsBasicAuthSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig">ZeroTrustCwsBasicAuthSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig">ZeroTrustCwsBasicAuthSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.resetExpiresAt">resetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.resetPassword">resetPassword</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetExpiresAt` <a name="resetExpiresAt" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.resetExpiresAt"></a>

```typescript
public resetExpiresAt(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.resetPassword"></a>

```typescript
public resetPassword(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustCwsBasicAuthSecret resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.isConstruct"></a>

```typescript
import { zeroTrustCwsBasicAuthSecret } from '@cdktn/provider-cloudflare'

zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.isTerraformElement"></a>

```typescript
import { zeroTrustCwsBasicAuthSecret } from '@cdktn/provider-cloudflare'

zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.isTerraformResource"></a>

```typescript
import { zeroTrustCwsBasicAuthSecret } from '@cdktn/provider-cloudflare'

zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.generateConfigForImport"></a>

```typescript
import { zeroTrustCwsBasicAuthSecret } from '@cdktn/provider-cloudflare'

zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ZeroTrustCwsBasicAuthSecret resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustCwsBasicAuthSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustCwsBasicAuthSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_basic_auth_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCwsBasicAuthSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.credentialIdInput">credentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.expiresAtInput">expiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.credentialId">credentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.password">password</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `credentialIdInput`<sup>Optional</sup> <a name="credentialIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.credentialIdInput"></a>

```typescript
public readonly credentialIdInput: string;
```

- *Type:* string

---

##### `expiresAtInput`<sup>Optional</sup> <a name="expiresAtInput" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.expiresAtInput"></a>

```typescript
public readonly expiresAtInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `credentialId`<sup>Required</sup> <a name="credentialId" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.credentialId"></a>

```typescript
public readonly credentialId: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCwsBasicAuthSecretConfig <a name="ZeroTrustCwsBasicAuthSecretConfig" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.Initializer"></a>

```typescript
import { zeroTrustCwsBasicAuthSecret } from '@cdktn/provider-cloudflare'

const zeroTrustCwsBasicAuthSecretConfig: zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.credentialId">credentialId</a></code> | <code>string</code> | ID of the parent credential. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.expiresAt">expiresAt</a></code> | <code>string</code> | Optional deactivation deadline (RFC 3339). Omit or null for no expiry. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.password">password</a></code> | <code>string</code> | Password stored only as a one-way hash and never returned. Maximum 72 UTF-8 bytes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_basic_auth_secret#account_id ZeroTrustCwsBasicAuthSecret#account_id}

---

##### `credentialId`<sup>Required</sup> <a name="credentialId" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.credentialId"></a>

```typescript
public readonly credentialId: string;
```

- *Type:* string

ID of the parent credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_basic_auth_secret#credential_id ZeroTrustCwsBasicAuthSecret#credential_id}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

Optional deactivation deadline (RFC 3339). Omit or null for no expiry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_basic_auth_secret#expires_at ZeroTrustCwsBasicAuthSecret#expires_at}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-cloudflare.zeroTrustCwsBasicAuthSecret.ZeroTrustCwsBasicAuthSecretConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password stored only as a one-way hash and never returned. Maximum 72 UTF-8 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_basic_auth_secret#password ZeroTrustCwsBasicAuthSecret#password}

---



