# `dataCloudflareEmailSecurityDomains` Submodule <a name="`dataCloudflareEmailSecurityDomains` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityDomains <a name="DataCloudflareEmailSecurityDomains" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains cloudflare_email_security_domains}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityDomains } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains(scope: Construct, id: string, config: DataCloudflareEmailSecurityDomainsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig">DataCloudflareEmailSecurityDomainsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig">DataCloudflareEmailSecurityDomainsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetActiveDeliveryMode">resetActiveDeliveryMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetAllowedDeliveryMode">resetAllowedDeliveryMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetIntegrationId">resetIntegrationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetActiveDeliveryMode` <a name="resetActiveDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetActiveDeliveryMode"></a>

```typescript
public resetActiveDeliveryMode(): void
```

##### `resetAllowedDeliveryMode` <a name="resetAllowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetAllowedDeliveryMode"></a>

```typescript
public resetAllowedDeliveryMode(): void
```

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetIntegrationId` <a name="resetIntegrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetIntegrationId"></a>

```typescript
public resetIntegrationId(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityDomains resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isConstruct"></a>

```typescript
import { dataCloudflareEmailSecurityDomains } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformElement"></a>

```typescript
import { dataCloudflareEmailSecurityDomains } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformDataSource"></a>

```typescript
import { dataCloudflareEmailSecurityDomains } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport"></a>

```typescript
import { dataCloudflareEmailSecurityDomains } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityDomains resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareEmailSecurityDomains to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareEmailSecurityDomains that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityDomains to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList">DataCloudflareEmailSecurityDomainsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryModeInput">activeDeliveryModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryModeInput">allowedDeliveryModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domainInput">domainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationIdInput">integrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryMode">activeDeliveryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryMode">allowedDeliveryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domain">domain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationId">integrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.result"></a>

```typescript
public readonly result: DataCloudflareEmailSecurityDomainsResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList">DataCloudflareEmailSecurityDomainsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `activeDeliveryModeInput`<sup>Optional</sup> <a name="activeDeliveryModeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryModeInput"></a>

```typescript
public readonly activeDeliveryModeInput: string;
```

- *Type:* string

---

##### `allowedDeliveryModeInput`<sup>Optional</sup> <a name="allowedDeliveryModeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryModeInput"></a>

```typescript
public readonly allowedDeliveryModeInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domainInput"></a>

```typescript
public readonly domainInput: string[];
```

- *Type:* string[]

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationIdInput"></a>

```typescript
public readonly integrationIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `activeDeliveryMode`<sup>Required</sup> <a name="activeDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryMode"></a>

```typescript
public readonly activeDeliveryMode: string;
```

- *Type:* string

---

##### `allowedDeliveryMode`<sup>Required</sup> <a name="allowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryMode"></a>

```typescript
public readonly allowedDeliveryMode: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domain"></a>

```typescript
public readonly domain: string[];
```

- *Type:* string[]

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityDomainsConfig <a name="DataCloudflareEmailSecurityDomainsConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityDomains } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailSecurityDomainsConfig: dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.activeDeliveryMode">activeDeliveryMode</a></code> | <code>string</code> | Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.allowedDeliveryMode">allowedDeliveryMode</a></code> | <code>string</code> | Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.direction">direction</a></code> | <code>string</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.domain">domain</a></code> | <code>string[]</code> | Domain names to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.integrationId">integrationId</a></code> | <code>string</code> | Integration ID to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.order">order</a></code> | <code>string</code> | Field to sort by. Available values: "domain", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.search">search</a></code> | <code>string</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.status">status</a></code> | <code>string</code> | Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#account_id DataCloudflareEmailSecurityDomains#account_id}

---

##### `activeDeliveryMode`<sup>Optional</sup> <a name="activeDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.activeDeliveryMode"></a>

```typescript
public readonly activeDeliveryMode: string;
```

- *Type:* string

Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#active_delivery_mode DataCloudflareEmailSecurityDomains#active_delivery_mode}

---

##### `allowedDeliveryMode`<sup>Optional</sup> <a name="allowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.allowedDeliveryMode"></a>

```typescript
public readonly allowedDeliveryMode: string;
```

- *Type:* string

Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#allowed_delivery_mode DataCloudflareEmailSecurityDomains#allowed_delivery_mode}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#direction DataCloudflareEmailSecurityDomains#direction}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.domain"></a>

```typescript
public readonly domain: string[];
```

- *Type:* string[]

Domain names to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#domain DataCloudflareEmailSecurityDomains#domain}

---

##### `integrationId`<sup>Optional</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

Integration ID to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#integration_id DataCloudflareEmailSecurityDomains#integration_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#max_items DataCloudflareEmailSecurityDomains#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to sort by. Available values: "domain", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#order DataCloudflareEmailSecurityDomains#order}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#search DataCloudflareEmailSecurityDomains#search}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#status DataCloudflareEmailSecurityDomains#status}

---

### DataCloudflareEmailSecurityDomainsResult <a name="DataCloudflareEmailSecurityDomainsResult" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityDomains } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailSecurityDomainsResult: dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult = { ... }
```


### DataCloudflareEmailSecurityDomainsResultAuthorization <a name="DataCloudflareEmailSecurityDomainsResultAuthorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityDomains } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailSecurityDomainsResultAuthorization: dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization = { ... }
```


### DataCloudflareEmailSecurityDomainsResultEmailsProcessed <a name="DataCloudflareEmailSecurityDomainsResultEmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityDomains } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailSecurityDomainsResultEmailsProcessed: dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference <a name="DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityDomains } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.authorized">authorized</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization">DataCloudflareEmailSecurityDomainsResultAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorized`<sup>Required</sup> <a name="authorized" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.authorized"></a>

```typescript
public readonly authorized: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareEmailSecurityDomainsResultAuthorization;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization">DataCloudflareEmailSecurityDomainsResultAuthorization</a>

---


### DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference <a name="DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityDomains } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessed">totalEmailsProcessed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious">totalEmailsProcessedPrevious</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed">DataCloudflareEmailSecurityDomainsResultEmailsProcessed</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `totalEmailsProcessed`<sup>Required</sup> <a name="totalEmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessed"></a>

```typescript
public readonly totalEmailsProcessed: number;
```

- *Type:* number

---

##### `totalEmailsProcessedPrevious`<sup>Required</sup> <a name="totalEmailsProcessedPrevious" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious"></a>

```typescript
public readonly totalEmailsProcessedPrevious: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareEmailSecurityDomainsResultEmailsProcessed;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed">DataCloudflareEmailSecurityDomainsResultEmailsProcessed</a>

---


### DataCloudflareEmailSecurityDomainsResultList <a name="DataCloudflareEmailSecurityDomainsResultList" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityDomains } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareEmailSecurityDomainsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareEmailSecurityDomainsResultOutputReference <a name="DataCloudflareEmailSecurityDomainsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityDomains } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.allowedDeliveryModes">allowedDeliveryModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference">DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dmarcStatus">dmarcStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dropDispositions">dropDispositions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.emailsProcessed">emailsProcessed</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.inboxProvider">inboxProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.integrationId">integrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.ipRestrictions">ipRestrictions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lookbackHops">lookbackHops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.o365TenantId">o365TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsInbound">requireTlsInbound</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsOutbound">requireTlsOutbound</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.spfStatus">spfStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.transport">transport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult">DataCloudflareEmailSecurityDomainsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedDeliveryModes`<sup>Required</sup> <a name="allowedDeliveryModes" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.allowedDeliveryModes"></a>

```typescript
public readonly allowedDeliveryModes: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.authorization"></a>

```typescript
public readonly authorization: DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference">DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dmarcStatus`<sup>Required</sup> <a name="dmarcStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dmarcStatus"></a>

```typescript
public readonly dmarcStatus: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `dropDispositions`<sup>Required</sup> <a name="dropDispositions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dropDispositions"></a>

```typescript
public readonly dropDispositions: string[];
```

- *Type:* string[]

---

##### `emailsProcessed`<sup>Required</sup> <a name="emailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.emailsProcessed"></a>

```typescript
public readonly emailsProcessed: DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference</a>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inboxProvider`<sup>Required</sup> <a name="inboxProvider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.inboxProvider"></a>

```typescript
public readonly inboxProvider: string;
```

- *Type:* string

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

---

##### `ipRestrictions`<sup>Required</sup> <a name="ipRestrictions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.ipRestrictions"></a>

```typescript
public readonly ipRestrictions: string[];
```

- *Type:* string[]

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `lookbackHops`<sup>Required</sup> <a name="lookbackHops" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lookbackHops"></a>

```typescript
public readonly lookbackHops: number;
```

- *Type:* number

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `o365TenantId`<sup>Required</sup> <a name="o365TenantId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.o365TenantId"></a>

```typescript
public readonly o365TenantId: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `requireTlsInbound`<sup>Required</sup> <a name="requireTlsInbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsInbound"></a>

```typescript
public readonly requireTlsInbound: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `requireTlsOutbound`<sup>Required</sup> <a name="requireTlsOutbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsOutbound"></a>

```typescript
public readonly requireTlsOutbound: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `spfStatus`<sup>Required</sup> <a name="spfStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.spfStatus"></a>

```typescript
public readonly spfStatus: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareEmailSecurityDomainsResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult">DataCloudflareEmailSecurityDomainsResult</a>

---



