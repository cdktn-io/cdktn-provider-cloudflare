# `dataCloudflareZeroTrustAccessAiControlsMcpServer` Submodule <a name="`dataCloudflareZeroTrustAccessAiControlsMcpServer` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpServer <a name="DataCloudflareZeroTrustAccessAiControlsMcpServer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server cloudflare_zero_trust_access_ai_controls_mcp_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessAiControlsMcpServer } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer(scope: Construct, id: string, config: DataCloudflareZeroTrustAccessAiControlsMcpServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig">DataCloudflareZeroTrustAccessAiControlsMcpServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig">DataCloudflareZeroTrustAccessAiControlsMcpServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareZeroTrustAccessAiControlsMcpServerFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustAccessAiControlsMcpServer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustAccessAiControlsMcpServer } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustAccessAiControlsMcpServer } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustAccessAiControlsMcpServer } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustAccessAiControlsMcpServer } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustAccessAiControlsMcpServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustAccessAiControlsMcpServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustAccessAiControlsMcpServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessAiControlsMcpServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.error">error</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference">DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.lastSuccessfulSync">lastSuccessfulSync</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.lastSynced">lastSynced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.modifiedBy">modifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.prompts">prompts</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.tools">tools</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.error"></a>

```typescript
public readonly error: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference">DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `lastSuccessfulSync`<sup>Required</sup> <a name="lastSuccessfulSync" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.lastSuccessfulSync"></a>

```typescript
public readonly lastSuccessfulSync: string;
```

- *Type:* string

---

##### `lastSynced`<sup>Required</sup> <a name="lastSynced" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.lastSynced"></a>

```typescript
public readonly lastSynced: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `modifiedBy`<sup>Required</sup> <a name="modifiedBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.modifiedBy"></a>

```typescript
public readonly modifiedBy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `prompts`<sup>Required</sup> <a name="prompts" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.prompts"></a>

```typescript
public readonly prompts: StringMapList;
```

- *Type:* cdktn.StringMapList

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.tools"></a>

```typescript
public readonly tools: StringMapList;
```

- *Type:* cdktn.StringMapList

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareZeroTrustAccessAiControlsMcpServerFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpServerConfig <a name="DataCloudflareZeroTrustAccessAiControlsMcpServerConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessAiControlsMcpServer } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustAccessAiControlsMcpServerConfig: dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#account_id DataCloudflareZeroTrustAccessAiControlsMcpServer#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#filter DataCloudflareZeroTrustAccessAiControlsMcpServer#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.id">id</a></code> | <code>string</code> | server id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#account_id DataCloudflareZeroTrustAccessAiControlsMcpServer#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustAccessAiControlsMcpServerFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#filter DataCloudflareZeroTrustAccessAiControlsMcpServer#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

server id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#id DataCloudflareZeroTrustAccessAiControlsMcpServer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataCloudflareZeroTrustAccessAiControlsMcpServerFilter <a name="DataCloudflareZeroTrustAccessAiControlsMcpServerFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessAiControlsMcpServer } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustAccessAiControlsMcpServerFilter: dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter.property.search">search</a></code> | <code>string</code> | Search by id, name. |

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Search by id, name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_access_ai_controls_mcp_server#search DataCloudflareZeroTrustAccessAiControlsMcpServer#search}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference <a name="DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessAiControlsMcpServer } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.resetSearch"></a>

```typescript
public resetSearch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareZeroTrustAccessAiControlsMcpServerFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessAiControlsMcpServer.DataCloudflareZeroTrustAccessAiControlsMcpServerFilter">DataCloudflareZeroTrustAccessAiControlsMcpServerFilter</a>

---



