# `zeroTrustCwsPolicySet` Submodule <a name="`zeroTrustCwsPolicySet` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCwsPolicySet <a name="ZeroTrustCwsPolicySet" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set cloudflare_zero_trust_cws_policy_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer"></a>

```typescript
import { zeroTrustCwsPolicySet } from '@cdktn/provider-cloudflare'

new zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet(scope: Construct, id: string, config: ZeroTrustCwsPolicySetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig">ZeroTrustCwsPolicySetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig">ZeroTrustCwsPolicySetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.putPolicies">putPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetExcludeWorkloadIds">resetExcludeWorkloadIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetIncludeWorkloadIds">resetIncludeWorkloadIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicies` <a name="putPolicies" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.putPolicies"></a>

```typescript
public putPolicies(value: IResolvable | ZeroTrustCwsPolicySetPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.putPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExcludeWorkloadIds` <a name="resetExcludeWorkloadIds" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetExcludeWorkloadIds"></a>

```typescript
public resetExcludeWorkloadIds(): void
```

##### `resetIncludeWorkloadIds` <a name="resetIncludeWorkloadIds" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetIncludeWorkloadIds"></a>

```typescript
public resetIncludeWorkloadIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustCwsPolicySet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isConstruct"></a>

```typescript
import { zeroTrustCwsPolicySet } from '@cdktn/provider-cloudflare'

zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformElement"></a>

```typescript
import { zeroTrustCwsPolicySet } from '@cdktn/provider-cloudflare'

zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformResource"></a>

```typescript
import { zeroTrustCwsPolicySet } from '@cdktn/provider-cloudflare'

zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport"></a>

```typescript
import { zeroTrustCwsPolicySet } from '@cdktn/provider-cloudflare'

zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ZeroTrustCwsPolicySet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustCwsPolicySet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustCwsPolicySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCwsPolicySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList">ZeroTrustCwsPolicySetPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.excludeWorkloadIdsInput">excludeWorkloadIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.includeWorkloadIdsInput">includeWorkloadIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.policiesInput">policiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.excludeWorkloadIds">excludeWorkloadIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.includeWorkloadIds">includeWorkloadIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.policies"></a>

```typescript
public readonly policies: ZeroTrustCwsPolicySetPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList">ZeroTrustCwsPolicySetPoliciesList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `excludeWorkloadIdsInput`<sup>Optional</sup> <a name="excludeWorkloadIdsInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.excludeWorkloadIdsInput"></a>

```typescript
public readonly excludeWorkloadIdsInput: string[];
```

- *Type:* string[]

---

##### `includeWorkloadIdsInput`<sup>Optional</sup> <a name="includeWorkloadIdsInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.includeWorkloadIdsInput"></a>

```typescript
public readonly includeWorkloadIdsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.policiesInput"></a>

```typescript
public readonly policiesInput: IResolvable | ZeroTrustCwsPolicySetPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `excludeWorkloadIds`<sup>Required</sup> <a name="excludeWorkloadIds" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.excludeWorkloadIds"></a>

```typescript
public readonly excludeWorkloadIds: string[];
```

- *Type:* string[]

---

##### `includeWorkloadIds`<sup>Required</sup> <a name="includeWorkloadIds" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.includeWorkloadIds"></a>

```typescript
public readonly includeWorkloadIds: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCwsPolicySetConfig <a name="ZeroTrustCwsPolicySetConfig" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.Initializer"></a>

```typescript
import { zeroTrustCwsPolicySet } from '@cdktn/provider-cloudflare'

const zeroTrustCwsPolicySetConfig: zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.name">name</a></code> | <code>string</code> | Name of the policy set. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.policies">policies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>[]</code> | Policies to include with per-membership enforcement mode. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.description">description</a></code> | <code>string</code> | Optional free-form description. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.excludeWorkloadIds">excludeWorkloadIds</a></code> | <code>string[]</code> | Workload IDs that exclude matching requests. Exclusions take precedence. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.includeWorkloadIds">includeWorkloadIds</a></code> | <code>string[]</code> | Workload IDs that include matching requests. Empty or omitted includes all requests before exclusions. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#account_id ZeroTrustCwsPolicySet#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the policy set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#name ZeroTrustCwsPolicySet#name}

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.policies"></a>

```typescript
public readonly policies: IResolvable | ZeroTrustCwsPolicySetPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>[]

Policies to include with per-membership enforcement mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#policies ZeroTrustCwsPolicySet#policies}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional free-form description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#description ZeroTrustCwsPolicySet#description}

---

##### `excludeWorkloadIds`<sup>Optional</sup> <a name="excludeWorkloadIds" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.excludeWorkloadIds"></a>

```typescript
public readonly excludeWorkloadIds: string[];
```

- *Type:* string[]

Workload IDs that exclude matching requests. Exclusions take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#exclude_workload_ids ZeroTrustCwsPolicySet#exclude_workload_ids}

---

##### `includeWorkloadIds`<sup>Optional</sup> <a name="includeWorkloadIds" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.includeWorkloadIds"></a>

```typescript
public readonly includeWorkloadIds: string[];
```

- *Type:* string[]

Workload IDs that include matching requests. Empty or omitted includes all requests before exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#include_workload_ids ZeroTrustCwsPolicySet#include_workload_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#tags ZeroTrustCwsPolicySet#tags}

---

### ZeroTrustCwsPolicySetPolicies <a name="ZeroTrustCwsPolicySetPolicies" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies.Initializer"></a>

```typescript
import { zeroTrustCwsPolicySet } from '@cdktn/provider-cloudflare'

const zeroTrustCwsPolicySetPolicies: zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies.property.policyId">policyId</a></code> | <code>string</code> | ID of the member policy. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies.property.enforce">enforce</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this policy should enforce when it matches. Defaults to true; false keeps the policy attached for non-enforcing evaluation. |

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

ID of the member policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#policy_id ZeroTrustCwsPolicySet#policy_id}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies.property.enforce"></a>

```typescript
public readonly enforce: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this policy should enforce when it matches. Defaults to true; false keeps the policy attached for non-enforcing evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#enforce ZeroTrustCwsPolicySet#enforce}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustCwsPolicySetPoliciesList <a name="ZeroTrustCwsPolicySetPoliciesList" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer"></a>

```typescript
import { zeroTrustCwsPolicySet } from '@cdktn/provider-cloudflare'

new zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.get"></a>

```typescript
public get(index: number): ZeroTrustCwsPolicySetPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustCwsPolicySetPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>[]

---


### ZeroTrustCwsPolicySetPoliciesOutputReference <a name="ZeroTrustCwsPolicySetPoliciesOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer"></a>

```typescript
import { zeroTrustCwsPolicySet } from '@cdktn/provider-cloudflare'

new zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.resetEnforce">resetEnforce</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnforce` <a name="resetEnforce" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.resetEnforce"></a>

```typescript
public resetEnforce(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.enforceInput">enforceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.enforce">enforce</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.enforceInput"></a>

```typescript
public readonly enforceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.enforce"></a>

```typescript
public readonly enforce: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustCwsPolicySetPolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>

---



