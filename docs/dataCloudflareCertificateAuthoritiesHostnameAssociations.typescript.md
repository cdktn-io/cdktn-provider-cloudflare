# `dataCloudflareCertificateAuthoritiesHostnameAssociations` Submodule <a name="`dataCloudflareCertificateAuthoritiesHostnameAssociations` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCertificateAuthoritiesHostnameAssociations <a name="DataCloudflareCertificateAuthoritiesHostnameAssociations" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_authorities_hostname_associations cloudflare_certificate_authorities_hostname_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer"></a>

```typescript
import { dataCloudflareCertificateAuthoritiesHostnameAssociations } from '@cdktn/provider-cloudflare'

new dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations(scope: Construct, id: string, config?: DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig">DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig">DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetMtlsCertificateId">resetMtlsCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMtlsCertificateId` <a name="resetMtlsCertificateId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetMtlsCertificateId"></a>

```typescript
public resetMtlsCertificateId(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareCertificateAuthoritiesHostnameAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isConstruct"></a>

```typescript
import { dataCloudflareCertificateAuthoritiesHostnameAssociations } from '@cdktn/provider-cloudflare'

dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformElement"></a>

```typescript
import { dataCloudflareCertificateAuthoritiesHostnameAssociations } from '@cdktn/provider-cloudflare'

dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformDataSource"></a>

```typescript
import { dataCloudflareCertificateAuthoritiesHostnameAssociations } from '@cdktn/provider-cloudflare'

dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport"></a>

```typescript
import { dataCloudflareCertificateAuthoritiesHostnameAssociations } from '@cdktn/provider-cloudflare'

dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareCertificateAuthoritiesHostnameAssociations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareCertificateAuthoritiesHostnameAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareCertificateAuthoritiesHostnameAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_authorities_hostname_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareCertificateAuthoritiesHostnameAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.hostnames">hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.mtlsCertificateIdInput">mtlsCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.mtlsCertificateId">mtlsCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mtlsCertificateIdInput`<sup>Optional</sup> <a name="mtlsCertificateIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.mtlsCertificateIdInput"></a>

```typescript
public readonly mtlsCertificateIdInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `mtlsCertificateId`<sup>Required</sup> <a name="mtlsCertificateId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.mtlsCertificateId"></a>

```typescript
public readonly mtlsCertificateId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig <a name="DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.Initializer"></a>

```typescript
import { dataCloudflareCertificateAuthoritiesHostnameAssociations } from '@cdktn/provider-cloudflare'

const dataCloudflareCertificateAuthoritiesHostnameAssociationsConfig: dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.mtlsCertificateId">mtlsCertificateId</a></code> | <code>string</code> | The UUID to match against for a certificate that was uploaded to the mTLS Certificate Management endpoint. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `mtlsCertificateId`<sup>Optional</sup> <a name="mtlsCertificateId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.mtlsCertificateId"></a>

```typescript
public readonly mtlsCertificateId: string;
```

- *Type:* string

The UUID to match against for a certificate that was uploaded to the mTLS Certificate Management endpoint.

If no mtls_certificate_id is given, the results will be the hostnames associated to your active Cloudflare Managed CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_authorities_hostname_associations#mtls_certificate_id DataCloudflareCertificateAuthoritiesHostnameAssociations#mtls_certificate_id}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_authorities_hostname_associations#zone_id DataCloudflareCertificateAuthoritiesHostnameAssociations#zone_id}

---



