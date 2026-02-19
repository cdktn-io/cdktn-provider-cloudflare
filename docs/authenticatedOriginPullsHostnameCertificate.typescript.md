# `authenticatedOriginPullsHostnameCertificate` Submodule <a name="`authenticatedOriginPullsHostnameCertificate` Submodule" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticatedOriginPullsHostnameCertificate <a name="AuthenticatedOriginPullsHostnameCertificate" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/authenticated_origin_pulls_hostname_certificate cloudflare_authenticated_origin_pulls_hostname_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer"></a>

```typescript
import { authenticatedOriginPullsHostnameCertificate } from '@cdktn/provider-cloudflare'

new authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate(scope: Construct, id: string, config: AuthenticatedOriginPullsHostnameCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig">AuthenticatedOriginPullsHostnameCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig">AuthenticatedOriginPullsHostnameCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AuthenticatedOriginPullsHostnameCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isConstruct"></a>

```typescript
import { authenticatedOriginPullsHostnameCertificate } from '@cdktn/provider-cloudflare'

authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformElement"></a>

```typescript
import { authenticatedOriginPullsHostnameCertificate } from '@cdktn/provider-cloudflare'

authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformResource"></a>

```typescript
import { authenticatedOriginPullsHostnameCertificate } from '@cdktn/provider-cloudflare'

authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport"></a>

```typescript
import { authenticatedOriginPullsHostnameCertificate } from '@cdktn/provider-cloudflare'

authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AuthenticatedOriginPullsHostnameCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuthenticatedOriginPullsHostnameCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuthenticatedOriginPullsHostnameCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/authenticated_origin_pulls_hostname_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AuthenticatedOriginPullsHostnameCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.uploadedOn">uploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `uploadedOn`<sup>Required</sup> <a name="uploadedOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.uploadedOn"></a>

```typescript
public readonly uploadedOn: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticatedOriginPullsHostnameCertificateConfig <a name="AuthenticatedOriginPullsHostnameCertificateConfig" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.Initializer"></a>

```typescript
import { authenticatedOriginPullsHostnameCertificate } from '@cdktn/provider-cloudflare'

const authenticatedOriginPullsHostnameCertificateConfig: authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.certificate">certificate</a></code> | <code>string</code> | The hostname certificate. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.privateKey">privateKey</a></code> | <code>string</code> | The hostname certificate's private key. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

The hostname certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/authenticated_origin_pulls_hostname_certificate#certificate AuthenticatedOriginPullsHostnameCertificate#certificate}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

The hostname certificate's private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/authenticated_origin_pulls_hostname_certificate#private_key AuthenticatedOriginPullsHostnameCertificate#private_key}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/authenticated_origin_pulls_hostname_certificate#zone_id AuthenticatedOriginPullsHostnameCertificate#zone_id}

---



