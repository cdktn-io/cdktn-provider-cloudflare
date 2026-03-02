# `dataCloudflareZeroTrustAccessShortLivedCertificate` Submodule <a name="`dataCloudflareZeroTrustAccessShortLivedCertificate` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessShortLivedCertificate <a name="DataCloudflareZeroTrustAccessShortLivedCertificate" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_access_short_lived_certificate cloudflare_zero_trust_access_short_lived_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessShortLivedCertificate } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate(scope: Construct, id: string, config: DataCloudflareZeroTrustAccessShortLivedCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig">DataCloudflareZeroTrustAccessShortLivedCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig">DataCloudflareZeroTrustAccessShortLivedCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustAccessShortLivedCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustAccessShortLivedCertificate } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustAccessShortLivedCertificate } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustAccessShortLivedCertificate } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustAccessShortLivedCertificate } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustAccessShortLivedCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustAccessShortLivedCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustAccessShortLivedCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_access_short_lived_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessShortLivedCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.aud">aud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `aud`<sup>Required</sup> <a name="aud" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.aud"></a>

```typescript
public readonly aud: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessShortLivedCertificateConfig <a name="DataCloudflareZeroTrustAccessShortLivedCertificateConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessShortLivedCertificate } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustAccessShortLivedCertificateConfig: dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.appId">appId</a></code> | <code>string</code> | UUID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.accountId">accountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_access_short_lived_certificate#app_id DataCloudflareZeroTrustAccessShortLivedCertificate#app_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_access_short_lived_certificate#account_id DataCloudflareZeroTrustAccessShortLivedCertificate#account_id}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificate.DataCloudflareZeroTrustAccessShortLivedCertificateConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_access_short_lived_certificate#zone_id DataCloudflareZeroTrustAccessShortLivedCertificate#zone_id}

---



