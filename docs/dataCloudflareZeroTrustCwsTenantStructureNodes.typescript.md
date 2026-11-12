# `dataCloudflareZeroTrustCwsTenantStructureNodes` Submodule <a name="`dataCloudflareZeroTrustCwsTenantStructureNodes` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsTenantStructureNodes <a name="DataCloudflareZeroTrustCwsTenantStructureNodes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes cloudflare_zero_trust_cws_tenant_structure_nodes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsTenantStructureNodes } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes(scope: Construct, id: string, config: DataCloudflareZeroTrustCwsTenantStructureNodesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig">DataCloudflareZeroTrustCwsTenantStructureNodesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig">DataCloudflareZeroTrustCwsTenantStructureNodesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetNativeId">resetNativeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetNodeKind">resetNodeKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetParent">resetParent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNativeId` <a name="resetNativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetNativeId"></a>

```typescript
public resetNativeId(): void
```

##### `resetNodeKind` <a name="resetNodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetNodeKind"></a>

```typescript
public resetNodeKind(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetParent"></a>

```typescript
public resetParent(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsTenantStructureNodes resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustCwsTenantStructureNodes } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustCwsTenantStructureNodes } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustCwsTenantStructureNodes } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustCwsTenantStructureNodes } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsTenantStructureNodes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustCwsTenantStructureNodes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustCwsTenantStructureNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsTenantStructureNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList">DataCloudflareZeroTrustCwsTenantStructureNodesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nativeIdInput">nativeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nodeKindInput">nodeKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.structureIdInput">structureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nativeId">nativeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nodeKind">nodeKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.structureId">structureId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.result"></a>

```typescript
public readonly result: DataCloudflareZeroTrustCwsTenantStructureNodesResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList">DataCloudflareZeroTrustCwsTenantStructureNodesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nativeIdInput`<sup>Optional</sup> <a name="nativeIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nativeIdInput"></a>

```typescript
public readonly nativeIdInput: string;
```

- *Type:* string

---

##### `nodeKindInput`<sup>Optional</sup> <a name="nodeKindInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nodeKindInput"></a>

```typescript
public readonly nodeKindInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `structureIdInput`<sup>Optional</sup> <a name="structureIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.structureIdInput"></a>

```typescript
public readonly structureIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nativeId`<sup>Required</sup> <a name="nativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nativeId"></a>

```typescript
public readonly nativeId: string;
```

- *Type:* string

---

##### `nodeKind`<sup>Required</sup> <a name="nodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nodeKind"></a>

```typescript
public readonly nodeKind: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `structureId`<sup>Required</sup> <a name="structureId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.structureId"></a>

```typescript
public readonly structureId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsTenantStructureNodesConfig <a name="DataCloudflareZeroTrustCwsTenantStructureNodesConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsTenantStructureNodes } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCwsTenantStructureNodesConfig: dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.structureId">structureId</a></code> | <code>string</code> | ID of the parent tenant structure. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.direction">direction</a></code> | <code>string</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.name">name</a></code> | <code>string</code> | Filter by node name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.nativeId">nativeId</a></code> | <code>string</code> | Filter by exact cloud-native identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.nodeKind">nodeKind</a></code> | <code>string</code> | Filter by exact node kind. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.order">order</a></code> | <code>string</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.parent">parent</a></code> | <code>string</code> | Filter by exact parent native ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#account_id DataCloudflareZeroTrustCwsTenantStructureNodes#account_id}

---

##### `structureId`<sup>Required</sup> <a name="structureId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.structureId"></a>

```typescript
public readonly structureId: string;
```

- *Type:* string

ID of the parent tenant structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#structure_id DataCloudflareZeroTrustCwsTenantStructureNodes#structure_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#direction DataCloudflareZeroTrustCwsTenantStructureNodes#direction}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#max_items DataCloudflareZeroTrustCwsTenantStructureNodes#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Filter by node name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#name DataCloudflareZeroTrustCwsTenantStructureNodes#name}

---

##### `nativeId`<sup>Optional</sup> <a name="nativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.nativeId"></a>

```typescript
public readonly nativeId: string;
```

- *Type:* string

Filter by exact cloud-native identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#native_id DataCloudflareZeroTrustCwsTenantStructureNodes#native_id}

---

##### `nodeKind`<sup>Optional</sup> <a name="nodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.nodeKind"></a>

```typescript
public readonly nodeKind: string;
```

- *Type:* string

Filter by exact node kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#node_kind DataCloudflareZeroTrustCwsTenantStructureNodes#node_kind}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#order DataCloudflareZeroTrustCwsTenantStructureNodes#order}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Filter by exact parent native ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#parent DataCloudflareZeroTrustCwsTenantStructureNodes#parent}

---

### DataCloudflareZeroTrustCwsTenantStructureNodesResult <a name="DataCloudflareZeroTrustCwsTenantStructureNodesResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResult.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsTenantStructureNodes } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCwsTenantStructureNodesResult: dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsTenantStructureNodesResultList <a name="DataCloudflareZeroTrustCwsTenantStructureNodesResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsTenantStructureNodes } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference <a name="DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsTenantStructureNodes } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.nativeId">nativeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.nodeKind">nodeKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResult">DataCloudflareZeroTrustCwsTenantStructureNodesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nativeId`<sup>Required</sup> <a name="nativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.nativeId"></a>

```typescript
public readonly nativeId: string;
```

- *Type:* string

---

##### `nodeKind`<sup>Required</sup> <a name="nodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.nodeKind"></a>

```typescript
public readonly nodeKind: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustCwsTenantStructureNodesResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResult">DataCloudflareZeroTrustCwsTenantStructureNodesResult</a>

---



