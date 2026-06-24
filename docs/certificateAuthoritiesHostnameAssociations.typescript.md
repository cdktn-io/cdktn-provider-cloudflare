# `certificateAuthoritiesHostnameAssociations` Submodule <a name="`certificateAuthoritiesHostnameAssociations` Submodule" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateAuthoritiesHostnameAssociations <a name="CertificateAuthoritiesHostnameAssociations" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations cloudflare_certificate_authorities_hostname_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer"></a>

```typescript
import { certificateAuthoritiesHostnameAssociations } from '@cdktn/provider-cloudflare'

new certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations(scope: Construct, id: string, config: CertificateAuthoritiesHostnameAssociationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig">CertificateAuthoritiesHostnameAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig">CertificateAuthoritiesHostnameAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetHostnames">resetHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetMtlsCertificateId">resetMtlsCertificateId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetHostnames` <a name="resetHostnames" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetHostnames"></a>

```typescript
public resetHostnames(): void
```

##### `resetMtlsCertificateId` <a name="resetMtlsCertificateId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetMtlsCertificateId"></a>

```typescript
public resetMtlsCertificateId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CertificateAuthoritiesHostnameAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isConstruct"></a>

```typescript
import { certificateAuthoritiesHostnameAssociations } from '@cdktn/provider-cloudflare'

certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformElement"></a>

```typescript
import { certificateAuthoritiesHostnameAssociations } from '@cdktn/provider-cloudflare'

certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformResource"></a>

```typescript
import { certificateAuthoritiesHostnameAssociations } from '@cdktn/provider-cloudflare'

certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport"></a>

```typescript
import { certificateAuthoritiesHostnameAssociations } from '@cdktn/provider-cloudflare'

certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CertificateAuthoritiesHostnameAssociations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificateAuthoritiesHostnameAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificateAuthoritiesHostnameAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CertificateAuthoritiesHostnameAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.hostnamesInput">hostnamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.mtlsCertificateIdInput">mtlsCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.hostnames">hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.mtlsCertificateId">mtlsCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `hostnamesInput`<sup>Optional</sup> <a name="hostnamesInput" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.hostnamesInput"></a>

```typescript
public readonly hostnamesInput: string[];
```

- *Type:* string[]

---

##### `mtlsCertificateIdInput`<sup>Optional</sup> <a name="mtlsCertificateIdInput" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.mtlsCertificateIdInput"></a>

```typescript
public readonly mtlsCertificateIdInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

---

##### `mtlsCertificateId`<sup>Required</sup> <a name="mtlsCertificateId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.mtlsCertificateId"></a>

```typescript
public readonly mtlsCertificateId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateAuthoritiesHostnameAssociationsConfig <a name="CertificateAuthoritiesHostnameAssociationsConfig" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.Initializer"></a>

```typescript
import { certificateAuthoritiesHostnameAssociations } from '@cdktn/provider-cloudflare'

const certificateAuthoritiesHostnameAssociationsConfig: certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.hostnames">hostnames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations#hostnames CertificateAuthoritiesHostnameAssociations#hostnames}. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.mtlsCertificateId">mtlsCertificateId</a></code> | <code>string</code> | The UUID for a certificate that was uploaded to the mTLS Certificate Management endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations#zone_id CertificateAuthoritiesHostnameAssociations#zone_id}

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations#hostnames CertificateAuthoritiesHostnameAssociations#hostnames}.

---

##### `mtlsCertificateId`<sup>Optional</sup> <a name="mtlsCertificateId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.mtlsCertificateId"></a>

```typescript
public readonly mtlsCertificateId: string;
```

- *Type:* string

The UUID for a certificate that was uploaded to the mTLS Certificate Management endpoint.

If no mtls_certificate_id is given, the hostnames will be associated to your active Cloudflare Managed CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations#mtls_certificate_id CertificateAuthoritiesHostnameAssociations#mtls_certificate_id}

---



