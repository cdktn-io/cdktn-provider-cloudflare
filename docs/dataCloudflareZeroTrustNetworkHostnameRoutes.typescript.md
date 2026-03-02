# `dataCloudflareZeroTrustNetworkHostnameRoutes` Submodule <a name="`dataCloudflareZeroTrustNetworkHostnameRoutes` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustNetworkHostnameRoutes <a name="DataCloudflareZeroTrustNetworkHostnameRoutes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_network_hostname_routes cloudflare_zero_trust_network_hostname_routes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustNetworkHostnameRoutes } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes(scope: Construct, id: string, config: DataCloudflareZeroTrustNetworkHostnameRoutesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig">DataCloudflareZeroTrustNetworkHostnameRoutesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig">DataCloudflareZeroTrustNetworkHostnameRoutesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetExistedAt">resetExistedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetIsDeleted">resetIsDeleted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetTunnelId">resetTunnelId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetExistedAt` <a name="resetExistedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetExistedAt"></a>

```typescript
public resetExistedAt(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsDeleted` <a name="resetIsDeleted" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetIsDeleted"></a>

```typescript
public resetIsDeleted(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetTunnelId` <a name="resetTunnelId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.resetTunnelId"></a>

```typescript
public resetTunnelId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustNetworkHostnameRoutes resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustNetworkHostnameRoutes } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustNetworkHostnameRoutes } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustNetworkHostnameRoutes } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustNetworkHostnameRoutes } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustNetworkHostnameRoutes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustNetworkHostnameRoutes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustNetworkHostnameRoutes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_network_hostname_routes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustNetworkHostnameRoutes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList">DataCloudflareZeroTrustNetworkHostnameRoutesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.existedAtInput">existedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.isDeletedInput">isDeletedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.tunnelIdInput">tunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.existedAt">existedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.isDeleted">isDeleted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.result"></a>

```typescript
public readonly result: DataCloudflareZeroTrustNetworkHostnameRoutesResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList">DataCloudflareZeroTrustNetworkHostnameRoutesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `existedAtInput`<sup>Optional</sup> <a name="existedAtInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.existedAtInput"></a>

```typescript
public readonly existedAtInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isDeletedInput`<sup>Optional</sup> <a name="isDeletedInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.isDeletedInput"></a>

```typescript
public readonly isDeletedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.tunnelIdInput"></a>

```typescript
public readonly tunnelIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `existedAt`<sup>Required</sup> <a name="existedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.existedAt"></a>

```typescript
public readonly existedAt: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.isDeleted"></a>

```typescript
public readonly isDeleted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustNetworkHostnameRoutesConfig <a name="DataCloudflareZeroTrustNetworkHostnameRoutesConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustNetworkHostnameRoutes } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustNetworkHostnameRoutesConfig: dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.comment">comment</a></code> | <code>string</code> | If set, only list hostname routes with the given comment. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.existedAt">existedAt</a></code> | <code>string</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.hostname">hostname</a></code> | <code>string</code> | If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.id">id</a></code> | <code>string</code> | The hostname route ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.isDeleted">isDeleted</a></code> | <code>boolean \| cdktn.IResolvable</code> | If `true`, only return deleted hostname routes. If `false`, exclude deleted hostname routes. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.tunnelId">tunnelId</a></code> | <code>string</code> | If set, only list hostname routes that point to a specific tunnel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_network_hostname_routes#account_id DataCloudflareZeroTrustNetworkHostnameRoutes#account_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

If set, only list hostname routes with the given comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_network_hostname_routes#comment DataCloudflareZeroTrustNetworkHostnameRoutes#comment}

---

##### `existedAt`<sup>Optional</sup> <a name="existedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.existedAt"></a>

```typescript
public readonly existedAt: string;
```

- *Type:* string

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_network_hostname_routes#existed_at DataCloudflareZeroTrustNetworkHostnameRoutes#existed_at}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_network_hostname_routes#hostname DataCloudflareZeroTrustNetworkHostnameRoutes#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The hostname route ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_network_hostname_routes#id DataCloudflareZeroTrustNetworkHostnameRoutes#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDeleted`<sup>Optional</sup> <a name="isDeleted" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.isDeleted"></a>

```typescript
public readonly isDeleted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If `true`, only return deleted hostname routes. If `false`, exclude deleted hostname routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_network_hostname_routes#is_deleted DataCloudflareZeroTrustNetworkHostnameRoutes#is_deleted}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_network_hostname_routes#max_items DataCloudflareZeroTrustNetworkHostnameRoutes#max_items}

---

##### `tunnelId`<sup>Optional</sup> <a name="tunnelId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesConfig.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

If set, only list hostname routes that point to a specific tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_network_hostname_routes#tunnel_id DataCloudflareZeroTrustNetworkHostnameRoutes#tunnel_id}

---

### DataCloudflareZeroTrustNetworkHostnameRoutesResult <a name="DataCloudflareZeroTrustNetworkHostnameRoutesResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResult.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustNetworkHostnameRoutes } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustNetworkHostnameRoutesResult: dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustNetworkHostnameRoutesResultList <a name="DataCloudflareZeroTrustNetworkHostnameRoutesResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustNetworkHostnameRoutes } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference <a name="DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustNetworkHostnameRoutes } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.deletedAt">deletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.tunnelName">tunnelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResult">DataCloudflareZeroTrustNetworkHostnameRoutesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.deletedAt"></a>

```typescript
public readonly deletedAt: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

##### `tunnelName`<sup>Required</sup> <a name="tunnelName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.tunnelName"></a>

```typescript
public readonly tunnelName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustNetworkHostnameRoutesResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoutes.DataCloudflareZeroTrustNetworkHostnameRoutesResult">DataCloudflareZeroTrustNetworkHostnameRoutesResult</a>

---



