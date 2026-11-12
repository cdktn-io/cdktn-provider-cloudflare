# `zeroTrustCwsDeployment` Submodule <a name="`zeroTrustCwsDeployment` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCwsDeployment <a name="ZeroTrustCwsDeployment" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment cloudflare_zero_trust_cws_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer"></a>

```typescript
import { zeroTrustCwsDeployment } from '@cdktn/provider-cloudflare'

new zeroTrustCwsDeployment.ZeroTrustCwsDeployment(scope: Construct, id: string, config: ZeroTrustCwsDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig">ZeroTrustCwsDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig">ZeroTrustCwsDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetDomainAclId">resetDomainAclId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetOnErrorAction">resetOnErrorAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetRegoRaiseError">resetRegoRaiseError</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDomainAclId` <a name="resetDomainAclId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetDomainAclId"></a>

```typescript
public resetDomainAclId(): void
```

##### `resetOnErrorAction` <a name="resetOnErrorAction" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetOnErrorAction"></a>

```typescript
public resetOnErrorAction(): void
```

##### `resetRegoRaiseError` <a name="resetRegoRaiseError" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetRegoRaiseError"></a>

```typescript
public resetRegoRaiseError(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustCwsDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isConstruct"></a>

```typescript
import { zeroTrustCwsDeployment } from '@cdktn/provider-cloudflare'

zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformElement"></a>

```typescript
import { zeroTrustCwsDeployment } from '@cdktn/provider-cloudflare'

zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformResource"></a>

```typescript
import { zeroTrustCwsDeployment } from '@cdktn/provider-cloudflare'

zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport"></a>

```typescript
import { zeroTrustCwsDeployment } from '@cdktn/provider-cloudflare'

zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ZeroTrustCwsDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustCwsDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustCwsDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCwsDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.basicAuthCredentialIdsInput">basicAuthCredentialIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.defaultModeInput">defaultModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.domainAclIdInput">domainAclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.onErrorActionInput">onErrorActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.policySetIdsInput">policySetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.regoRaiseErrorInput">regoRaiseErrorInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.basicAuthCredentialIds">basicAuthCredentialIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.defaultMode">defaultMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.domainAclId">domainAclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.onErrorAction">onErrorAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.policySetIds">policySetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.regoRaiseError">regoRaiseError</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `basicAuthCredentialIdsInput`<sup>Optional</sup> <a name="basicAuthCredentialIdsInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.basicAuthCredentialIdsInput"></a>

```typescript
public readonly basicAuthCredentialIdsInput: string[];
```

- *Type:* string[]

---

##### `defaultModeInput`<sup>Optional</sup> <a name="defaultModeInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.defaultModeInput"></a>

```typescript
public readonly defaultModeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainAclIdInput`<sup>Optional</sup> <a name="domainAclIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.domainAclIdInput"></a>

```typescript
public readonly domainAclIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `onErrorActionInput`<sup>Optional</sup> <a name="onErrorActionInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.onErrorActionInput"></a>

```typescript
public readonly onErrorActionInput: string;
```

- *Type:* string

---

##### `policySetIdsInput`<sup>Optional</sup> <a name="policySetIdsInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.policySetIdsInput"></a>

```typescript
public readonly policySetIdsInput: string[];
```

- *Type:* string[]

---

##### `regoRaiseErrorInput`<sup>Optional</sup> <a name="regoRaiseErrorInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.regoRaiseErrorInput"></a>

```typescript
public readonly regoRaiseErrorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `basicAuthCredentialIds`<sup>Required</sup> <a name="basicAuthCredentialIds" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.basicAuthCredentialIds"></a>

```typescript
public readonly basicAuthCredentialIds: string[];
```

- *Type:* string[]

---

##### `defaultMode`<sup>Required</sup> <a name="defaultMode" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.defaultMode"></a>

```typescript
public readonly defaultMode: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainAclId`<sup>Required</sup> <a name="domainAclId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.domainAclId"></a>

```typescript
public readonly domainAclId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onErrorAction`<sup>Required</sup> <a name="onErrorAction" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.onErrorAction"></a>

```typescript
public readonly onErrorAction: string;
```

- *Type:* string

---

##### `policySetIds`<sup>Required</sup> <a name="policySetIds" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.policySetIds"></a>

```typescript
public readonly policySetIds: string[];
```

- *Type:* string[]

---

##### `regoRaiseError`<sup>Required</sup> <a name="regoRaiseError" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.regoRaiseError"></a>

```typescript
public readonly regoRaiseError: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCwsDeploymentConfig <a name="ZeroTrustCwsDeploymentConfig" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.Initializer"></a>

```typescript
import { zeroTrustCwsDeployment } from '@cdktn/provider-cloudflare'

const zeroTrustCwsDeploymentConfig: zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.basicAuthCredentialIds">basicAuthCredentialIds</a></code> | <code>string[]</code> | IDs of basic-auth credentials to attach. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.defaultMode">defaultMode</a></code> | <code>string</code> | Default traffic mode: ALLOW or BLOCK Available values: "ALLOW", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.name">name</a></code> | <code>string</code> | Name of the deployment. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.policySetIds">policySetIds</a></code> | <code>string[]</code> | IDs of policy sets to attach. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.description">description</a></code> | <code>string</code> | Optional free-form description. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.domainAclId">domainAclId</a></code> | <code>string</code> | ID of the domain ACL to attach (omit or null for none). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.onErrorAction">onErrorAction</a></code> | <code>string</code> | Action for runtime Rego errors. Omit to use BLOCK. Available values: "BLOCK", "SKIP". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.regoRaiseError">regoRaiseError</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether OPA builtin failures are raised as runtime evaluation errors. Omit to use the default true value. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#account_id ZeroTrustCwsDeployment#account_id}

---

##### `basicAuthCredentialIds`<sup>Required</sup> <a name="basicAuthCredentialIds" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.basicAuthCredentialIds"></a>

```typescript
public readonly basicAuthCredentialIds: string[];
```

- *Type:* string[]

IDs of basic-auth credentials to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#basic_auth_credential_ids ZeroTrustCwsDeployment#basic_auth_credential_ids}

---

##### `defaultMode`<sup>Required</sup> <a name="defaultMode" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.defaultMode"></a>

```typescript
public readonly defaultMode: string;
```

- *Type:* string

Default traffic mode: ALLOW or BLOCK Available values: "ALLOW", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#default_mode ZeroTrustCwsDeployment#default_mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#name ZeroTrustCwsDeployment#name}

---

##### `policySetIds`<sup>Required</sup> <a name="policySetIds" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.policySetIds"></a>

```typescript
public readonly policySetIds: string[];
```

- *Type:* string[]

IDs of policy sets to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#policy_set_ids ZeroTrustCwsDeployment#policy_set_ids}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional free-form description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#description ZeroTrustCwsDeployment#description}

---

##### `domainAclId`<sup>Optional</sup> <a name="domainAclId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.domainAclId"></a>

```typescript
public readonly domainAclId: string;
```

- *Type:* string

ID of the domain ACL to attach (omit or null for none).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#domain_acl_id ZeroTrustCwsDeployment#domain_acl_id}

---

##### `onErrorAction`<sup>Optional</sup> <a name="onErrorAction" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.onErrorAction"></a>

```typescript
public readonly onErrorAction: string;
```

- *Type:* string

Action for runtime Rego errors. Omit to use BLOCK. Available values: "BLOCK", "SKIP".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#on_error_action ZeroTrustCwsDeployment#on_error_action}

---

##### `regoRaiseError`<sup>Optional</sup> <a name="regoRaiseError" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.regoRaiseError"></a>

```typescript
public readonly regoRaiseError: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether OPA builtin failures are raised as runtime evaluation errors. Omit to use the default true value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#rego_raise_error ZeroTrustCwsDeployment#rego_raise_error}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#tags ZeroTrustCwsDeployment#tags}

---



