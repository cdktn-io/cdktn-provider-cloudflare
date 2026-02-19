# `zeroTrustOrganization` Submodule <a name="`zeroTrustOrganization` Submodule" id="@cdktn/provider-cloudflare.zeroTrustOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustOrganization <a name="ZeroTrustOrganization" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization cloudflare_zero_trust_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer"></a>

```typescript
import { zeroTrustOrganization } from '@cdktn/provider-cloudflare'

new zeroTrustOrganization.ZeroTrustOrganization(scope: Construct, id: string, config?: ZeroTrustOrganizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig">ZeroTrustOrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig">ZeroTrustOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putCustomPages">putCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putLoginDesign">putLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAllowAuthenticateViaWarp">resetAllowAuthenticateViaWarp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAuthDomain">resetAuthDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAutoRedirectToIdentity">resetAutoRedirectToIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetCustomPages">resetCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetDenyUnmatchedRequests">resetDenyUnmatchedRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetDenyUnmatchedRequestsExemptedZoneNames">resetDenyUnmatchedRequestsExemptedZoneNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetIsUiReadOnly">resetIsUiReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetLoginDesign">resetLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetSessionDuration">resetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUiReadOnlyToggleReason">resetUiReadOnlyToggleReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUserSeatExpirationInactiveTime">resetUserSeatExpirationInactiveTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetWarpAuthSessionDuration">resetWarpAuthSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomPages` <a name="putCustomPages" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putCustomPages"></a>

```typescript
public putCustomPages(value: ZeroTrustOrganizationCustomPages): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putCustomPages.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

---

##### `putLoginDesign` <a name="putLoginDesign" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putLoginDesign"></a>

```typescript
public putLoginDesign(value: ZeroTrustOrganizationLoginDesign): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putLoginDesign.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetAllowAuthenticateViaWarp` <a name="resetAllowAuthenticateViaWarp" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAllowAuthenticateViaWarp"></a>

```typescript
public resetAllowAuthenticateViaWarp(): void
```

##### `resetAuthDomain` <a name="resetAuthDomain" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAuthDomain"></a>

```typescript
public resetAuthDomain(): void
```

##### `resetAutoRedirectToIdentity` <a name="resetAutoRedirectToIdentity" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAutoRedirectToIdentity"></a>

```typescript
public resetAutoRedirectToIdentity(): void
```

##### `resetCustomPages` <a name="resetCustomPages" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetCustomPages"></a>

```typescript
public resetCustomPages(): void
```

##### `resetDenyUnmatchedRequests` <a name="resetDenyUnmatchedRequests" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetDenyUnmatchedRequests"></a>

```typescript
public resetDenyUnmatchedRequests(): void
```

##### `resetDenyUnmatchedRequestsExemptedZoneNames` <a name="resetDenyUnmatchedRequestsExemptedZoneNames" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetDenyUnmatchedRequestsExemptedZoneNames"></a>

```typescript
public resetDenyUnmatchedRequestsExemptedZoneNames(): void
```

##### `resetIsUiReadOnly` <a name="resetIsUiReadOnly" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetIsUiReadOnly"></a>

```typescript
public resetIsUiReadOnly(): void
```

##### `resetLoginDesign` <a name="resetLoginDesign" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetLoginDesign"></a>

```typescript
public resetLoginDesign(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSessionDuration` <a name="resetSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetSessionDuration"></a>

```typescript
public resetSessionDuration(): void
```

##### `resetUiReadOnlyToggleReason` <a name="resetUiReadOnlyToggleReason" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUiReadOnlyToggleReason"></a>

```typescript
public resetUiReadOnlyToggleReason(): void
```

##### `resetUserSeatExpirationInactiveTime` <a name="resetUserSeatExpirationInactiveTime" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUserSeatExpirationInactiveTime"></a>

```typescript
public resetUserSeatExpirationInactiveTime(): void
```

##### `resetWarpAuthSessionDuration` <a name="resetWarpAuthSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetWarpAuthSessionDuration"></a>

```typescript
public resetWarpAuthSessionDuration(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isConstruct"></a>

```typescript
import { zeroTrustOrganization } from '@cdktn/provider-cloudflare'

zeroTrustOrganization.ZeroTrustOrganization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformElement"></a>

```typescript
import { zeroTrustOrganization } from '@cdktn/provider-cloudflare'

zeroTrustOrganization.ZeroTrustOrganization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformResource"></a>

```typescript
import { zeroTrustOrganization } from '@cdktn/provider-cloudflare'

zeroTrustOrganization.ZeroTrustOrganization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport"></a>

```typescript
import { zeroTrustOrganization } from '@cdktn/provider-cloudflare'

zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ZeroTrustOrganization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPages">customPages</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference">ZeroTrustOrganizationCustomPagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesign">loginDesign</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference">ZeroTrustOrganizationLoginDesignOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarpInput">allowAuthenticateViaWarpInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomainInput">authDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentityInput">autoRedirectToIdentityInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPagesInput">customPagesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsExemptedZoneNamesInput">denyUnmatchedRequestsExemptedZoneNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsInput">denyUnmatchedRequestsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnlyInput">isUiReadOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesignInput">loginDesignInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDurationInput">sessionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReasonInput">uiReadOnlyToggleReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTimeInput">userSeatExpirationInactiveTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDurationInput">warpAuthSessionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomain">authDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequests">denyUnmatchedRequests</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsExemptedZoneNames">denyUnmatchedRequestsExemptedZoneNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnly">isUiReadOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDuration">sessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReason">uiReadOnlyToggleReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTime">userSeatExpirationInactiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDuration">warpAuthSessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `customPages`<sup>Required</sup> <a name="customPages" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPages"></a>

```typescript
public readonly customPages: ZeroTrustOrganizationCustomPagesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference">ZeroTrustOrganizationCustomPagesOutputReference</a>

---

##### `loginDesign`<sup>Required</sup> <a name="loginDesign" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesign"></a>

```typescript
public readonly loginDesign: ZeroTrustOrganizationLoginDesignOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference">ZeroTrustOrganizationLoginDesignOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `allowAuthenticateViaWarpInput`<sup>Optional</sup> <a name="allowAuthenticateViaWarpInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarpInput"></a>

```typescript
public readonly allowAuthenticateViaWarpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `authDomainInput`<sup>Optional</sup> <a name="authDomainInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomainInput"></a>

```typescript
public readonly authDomainInput: string;
```

- *Type:* string

---

##### `autoRedirectToIdentityInput`<sup>Optional</sup> <a name="autoRedirectToIdentityInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentityInput"></a>

```typescript
public readonly autoRedirectToIdentityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `customPagesInput`<sup>Optional</sup> <a name="customPagesInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPagesInput"></a>

```typescript
public readonly customPagesInput: IResolvable | ZeroTrustOrganizationCustomPages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

---

##### `denyUnmatchedRequestsExemptedZoneNamesInput`<sup>Optional</sup> <a name="denyUnmatchedRequestsExemptedZoneNamesInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsExemptedZoneNamesInput"></a>

```typescript
public readonly denyUnmatchedRequestsExemptedZoneNamesInput: string[];
```

- *Type:* string[]

---

##### `denyUnmatchedRequestsInput`<sup>Optional</sup> <a name="denyUnmatchedRequestsInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsInput"></a>

```typescript
public readonly denyUnmatchedRequestsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isUiReadOnlyInput`<sup>Optional</sup> <a name="isUiReadOnlyInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnlyInput"></a>

```typescript
public readonly isUiReadOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `loginDesignInput`<sup>Optional</sup> <a name="loginDesignInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesignInput"></a>

```typescript
public readonly loginDesignInput: IResolvable | ZeroTrustOrganizationLoginDesign;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sessionDurationInput`<sup>Optional</sup> <a name="sessionDurationInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDurationInput"></a>

```typescript
public readonly sessionDurationInput: string;
```

- *Type:* string

---

##### `uiReadOnlyToggleReasonInput`<sup>Optional</sup> <a name="uiReadOnlyToggleReasonInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReasonInput"></a>

```typescript
public readonly uiReadOnlyToggleReasonInput: string;
```

- *Type:* string

---

##### `userSeatExpirationInactiveTimeInput`<sup>Optional</sup> <a name="userSeatExpirationInactiveTimeInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTimeInput"></a>

```typescript
public readonly userSeatExpirationInactiveTimeInput: string;
```

- *Type:* string

---

##### `warpAuthSessionDurationInput`<sup>Optional</sup> <a name="warpAuthSessionDurationInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDurationInput"></a>

```typescript
public readonly warpAuthSessionDurationInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `allowAuthenticateViaWarp`<sup>Required</sup> <a name="allowAuthenticateViaWarp" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarp"></a>

```typescript
public readonly allowAuthenticateViaWarp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `authDomain`<sup>Required</sup> <a name="authDomain" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomain"></a>

```typescript
public readonly authDomain: string;
```

- *Type:* string

---

##### `autoRedirectToIdentity`<sup>Required</sup> <a name="autoRedirectToIdentity" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentity"></a>

```typescript
public readonly autoRedirectToIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `denyUnmatchedRequests`<sup>Required</sup> <a name="denyUnmatchedRequests" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequests"></a>

```typescript
public readonly denyUnmatchedRequests: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `denyUnmatchedRequestsExemptedZoneNames`<sup>Required</sup> <a name="denyUnmatchedRequestsExemptedZoneNames" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsExemptedZoneNames"></a>

```typescript
public readonly denyUnmatchedRequestsExemptedZoneNames: string[];
```

- *Type:* string[]

---

##### `isUiReadOnly`<sup>Required</sup> <a name="isUiReadOnly" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnly"></a>

```typescript
public readonly isUiReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDuration"></a>

```typescript
public readonly sessionDuration: string;
```

- *Type:* string

---

##### `uiReadOnlyToggleReason`<sup>Required</sup> <a name="uiReadOnlyToggleReason" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReason"></a>

```typescript
public readonly uiReadOnlyToggleReason: string;
```

- *Type:* string

---

##### `userSeatExpirationInactiveTime`<sup>Required</sup> <a name="userSeatExpirationInactiveTime" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTime"></a>

```typescript
public readonly userSeatExpirationInactiveTime: string;
```

- *Type:* string

---

##### `warpAuthSessionDuration`<sup>Required</sup> <a name="warpAuthSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDuration"></a>

```typescript
public readonly warpAuthSessionDuration: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustOrganizationConfig <a name="ZeroTrustOrganizationConfig" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.Initializer"></a>

```typescript
import { zeroTrustOrganization } from '@cdktn/provider-cloudflare'

const zeroTrustOrganizationConfig: zeroTrustOrganization.ZeroTrustOrganizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.accountId">accountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, users can authenticate via WARP for any application in your organization. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.authDomain">authDomain</a></code> | <code>string</code> | The unique subdomain assigned to your Zero Trust organization. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to `true`, users skip the identity provider selection step during login. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.customPages">customPages</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#custom_pages ZeroTrustOrganization#custom_pages}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.denyUnmatchedRequests">denyUnmatchedRequests</a></code> | <code>boolean \| cdktn.IResolvable</code> | Determines whether to deny all requests to Cloudflare-protected resources that lack an associated Access application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.denyUnmatchedRequestsExemptedZoneNames">denyUnmatchedRequestsExemptedZoneNames</a></code> | <code>string[]</code> | Contains zone names to exempt from the `deny_unmatched_requests` feature. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.isUiReadOnly">isUiReadOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | Lock all settings as Read-Only in the Dashboard, regardless of user permission. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.loginDesign">loginDesign</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#login_design ZeroTrustOrganization#login_design}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.name">name</a></code> | <code>string</code> | The name of your Zero Trust organization. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.sessionDuration">sessionDuration</a></code> | <code>string</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.uiReadOnlyToggleReason">uiReadOnlyToggleReason</a></code> | <code>string</code> | A description of the reason why the UI read only field is being toggled. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.userSeatExpirationInactiveTime">userSeatExpirationInactiveTime</a></code> | <code>string</code> | The amount of time a user seat is inactive before it expires. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.warpAuthSessionDuration">warpAuthSessionDuration</a></code> | <code>string</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#account_id ZeroTrustOrganization#account_id}

---

##### `allowAuthenticateViaWarp`<sup>Optional</sup> <a name="allowAuthenticateViaWarp" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.allowAuthenticateViaWarp"></a>

```typescript
public readonly allowAuthenticateViaWarp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, users can authenticate via WARP for any application in your organization.

Application settings will take precedence over this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#allow_authenticate_via_warp ZeroTrustOrganization#allow_authenticate_via_warp}

---

##### `authDomain`<sup>Optional</sup> <a name="authDomain" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.authDomain"></a>

```typescript
public readonly authDomain: string;
```

- *Type:* string

The unique subdomain assigned to your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#auth_domain ZeroTrustOrganization#auth_domain}

---

##### `autoRedirectToIdentity`<sup>Optional</sup> <a name="autoRedirectToIdentity" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.autoRedirectToIdentity"></a>

```typescript
public readonly autoRedirectToIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to `true`, users skip the identity provider selection step during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#auto_redirect_to_identity ZeroTrustOrganization#auto_redirect_to_identity}

---

##### `customPages`<sup>Optional</sup> <a name="customPages" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.customPages"></a>

```typescript
public readonly customPages: ZeroTrustOrganizationCustomPages;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#custom_pages ZeroTrustOrganization#custom_pages}.

---

##### `denyUnmatchedRequests`<sup>Optional</sup> <a name="denyUnmatchedRequests" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.denyUnmatchedRequests"></a>

```typescript
public readonly denyUnmatchedRequests: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Determines whether to deny all requests to Cloudflare-protected resources that lack an associated Access application.

If enabled, you must explicitly configure an Access application and policy to allow traffic to your Cloudflare-protected resources. For domains you want to be public across all subdomains, add the domain to the `deny_unmatched_requests_exempted_zone_names` array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#deny_unmatched_requests ZeroTrustOrganization#deny_unmatched_requests}

---

##### `denyUnmatchedRequestsExemptedZoneNames`<sup>Optional</sup> <a name="denyUnmatchedRequestsExemptedZoneNames" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.denyUnmatchedRequestsExemptedZoneNames"></a>

```typescript
public readonly denyUnmatchedRequestsExemptedZoneNames: string[];
```

- *Type:* string[]

Contains zone names to exempt from the `deny_unmatched_requests` feature.

Requests to a subdomain in an exempted zone will block unauthenticated traffic by default if there is a configured Access application and policy that matches the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#deny_unmatched_requests_exempted_zone_names ZeroTrustOrganization#deny_unmatched_requests_exempted_zone_names}

---

##### `isUiReadOnly`<sup>Optional</sup> <a name="isUiReadOnly" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.isUiReadOnly"></a>

```typescript
public readonly isUiReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Lock all settings as Read-Only in the Dashboard, regardless of user permission.

Updates may only be made via the API or Terraform for this account when enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#is_ui_read_only ZeroTrustOrganization#is_ui_read_only}

---

##### `loginDesign`<sup>Optional</sup> <a name="loginDesign" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.loginDesign"></a>

```typescript
public readonly loginDesign: ZeroTrustOrganizationLoginDesign;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#login_design ZeroTrustOrganization#login_design}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#name ZeroTrustOrganization#name}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.sessionDuration"></a>

```typescript
public readonly sessionDuration: string;
```

- *Type:* string

The amount of time that tokens issued for applications will be valid.

Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#session_duration ZeroTrustOrganization#session_duration}

---

##### `uiReadOnlyToggleReason`<sup>Optional</sup> <a name="uiReadOnlyToggleReason" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.uiReadOnlyToggleReason"></a>

```typescript
public readonly uiReadOnlyToggleReason: string;
```

- *Type:* string

A description of the reason why the UI read only field is being toggled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#ui_read_only_toggle_reason ZeroTrustOrganization#ui_read_only_toggle_reason}

---

##### `userSeatExpirationInactiveTime`<sup>Optional</sup> <a name="userSeatExpirationInactiveTime" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.userSeatExpirationInactiveTime"></a>

```typescript
public readonly userSeatExpirationInactiveTime: string;
```

- *Type:* string

The amount of time a user seat is inactive before it expires.

When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count.  Minimum value for this setting is 1 month (730h). Must be in the format `300ms` or `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#user_seat_expiration_inactive_time ZeroTrustOrganization#user_seat_expiration_inactive_time}

---

##### `warpAuthSessionDuration`<sup>Optional</sup> <a name="warpAuthSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.warpAuthSessionDuration"></a>

```typescript
public readonly warpAuthSessionDuration: string;
```

- *Type:* string

The amount of time that tokens issued for applications will be valid.

Must be in the format `30m` or `2h45m`. Valid time units are: m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#warp_auth_session_duration ZeroTrustOrganization#warp_auth_session_duration}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#zone_id ZeroTrustOrganization#zone_id}

---

### ZeroTrustOrganizationCustomPages <a name="ZeroTrustOrganizationCustomPages" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.Initializer"></a>

```typescript
import { zeroTrustOrganization } from '@cdktn/provider-cloudflare'

const zeroTrustOrganizationCustomPages: zeroTrustOrganization.ZeroTrustOrganizationCustomPages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.forbidden">forbidden</a></code> | <code>string</code> | The uid of the custom page to use when a user is denied access after failing a non-identity rule. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.identityDenied">identityDenied</a></code> | <code>string</code> | The uid of the custom page to use when a user is denied access. |

---

##### `forbidden`<sup>Optional</sup> <a name="forbidden" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.forbidden"></a>

```typescript
public readonly forbidden: string;
```

- *Type:* string

The uid of the custom page to use when a user is denied access after failing a non-identity rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#forbidden ZeroTrustOrganization#forbidden}

---

##### `identityDenied`<sup>Optional</sup> <a name="identityDenied" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.identityDenied"></a>

```typescript
public readonly identityDenied: string;
```

- *Type:* string

The uid of the custom page to use when a user is denied access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#identity_denied ZeroTrustOrganization#identity_denied}

---

### ZeroTrustOrganizationLoginDesign <a name="ZeroTrustOrganizationLoginDesign" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.Initializer"></a>

```typescript
import { zeroTrustOrganization } from '@cdktn/provider-cloudflare'

const zeroTrustOrganizationLoginDesign: zeroTrustOrganization.ZeroTrustOrganizationLoginDesign = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.backgroundColor">backgroundColor</a></code> | <code>string</code> | The background color on your login page. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.footerText">footerText</a></code> | <code>string</code> | The text at the bottom of your login page. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.headerText">headerText</a></code> | <code>string</code> | The text at the top of your login page. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.logoPath">logoPath</a></code> | <code>string</code> | The URL of the logo on your login page. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.textColor">textColor</a></code> | <code>string</code> | The text color on your login page. |

---

##### `backgroundColor`<sup>Optional</sup> <a name="backgroundColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.backgroundColor"></a>

```typescript
public readonly backgroundColor: string;
```

- *Type:* string

The background color on your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#background_color ZeroTrustOrganization#background_color}

---

##### `footerText`<sup>Optional</sup> <a name="footerText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.footerText"></a>

```typescript
public readonly footerText: string;
```

- *Type:* string

The text at the bottom of your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#footer_text ZeroTrustOrganization#footer_text}

---

##### `headerText`<sup>Optional</sup> <a name="headerText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.headerText"></a>

```typescript
public readonly headerText: string;
```

- *Type:* string

The text at the top of your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#header_text ZeroTrustOrganization#header_text}

---

##### `logoPath`<sup>Optional</sup> <a name="logoPath" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.logoPath"></a>

```typescript
public readonly logoPath: string;
```

- *Type:* string

The URL of the logo on your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#logo_path ZeroTrustOrganization#logo_path}

---

##### `textColor`<sup>Optional</sup> <a name="textColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.textColor"></a>

```typescript
public readonly textColor: string;
```

- *Type:* string

The text color on your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_organization#text_color ZeroTrustOrganization#text_color}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustOrganizationCustomPagesOutputReference <a name="ZeroTrustOrganizationCustomPagesOutputReference" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer"></a>

```typescript
import { zeroTrustOrganization } from '@cdktn/provider-cloudflare'

new zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetForbidden">resetForbidden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetIdentityDenied">resetIdentityDenied</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForbidden` <a name="resetForbidden" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetForbidden"></a>

```typescript
public resetForbidden(): void
```

##### `resetIdentityDenied` <a name="resetIdentityDenied" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetIdentityDenied"></a>

```typescript
public resetIdentityDenied(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbiddenInput">forbiddenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDeniedInput">identityDeniedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbidden">forbidden</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDenied">identityDenied</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forbiddenInput`<sup>Optional</sup> <a name="forbiddenInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbiddenInput"></a>

```typescript
public readonly forbiddenInput: string;
```

- *Type:* string

---

##### `identityDeniedInput`<sup>Optional</sup> <a name="identityDeniedInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDeniedInput"></a>

```typescript
public readonly identityDeniedInput: string;
```

- *Type:* string

---

##### `forbidden`<sup>Required</sup> <a name="forbidden" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbidden"></a>

```typescript
public readonly forbidden: string;
```

- *Type:* string

---

##### `identityDenied`<sup>Required</sup> <a name="identityDenied" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDenied"></a>

```typescript
public readonly identityDenied: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustOrganizationCustomPages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

---


### ZeroTrustOrganizationLoginDesignOutputReference <a name="ZeroTrustOrganizationLoginDesignOutputReference" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer"></a>

```typescript
import { zeroTrustOrganization } from '@cdktn/provider-cloudflare'

new zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetBackgroundColor">resetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetFooterText">resetFooterText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetHeaderText">resetHeaderText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetLogoPath">resetLogoPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetTextColor">resetTextColor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackgroundColor` <a name="resetBackgroundColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetBackgroundColor"></a>

```typescript
public resetBackgroundColor(): void
```

##### `resetFooterText` <a name="resetFooterText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetFooterText"></a>

```typescript
public resetFooterText(): void
```

##### `resetHeaderText` <a name="resetHeaderText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetHeaderText"></a>

```typescript
public resetHeaderText(): void
```

##### `resetLogoPath` <a name="resetLogoPath" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetLogoPath"></a>

```typescript
public resetLogoPath(): void
```

##### `resetTextColor` <a name="resetTextColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetTextColor"></a>

```typescript
public resetTextColor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColorInput">backgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerTextInput">footerTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerTextInput">headerTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPathInput">logoPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColorInput">textColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerText">footerText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerText">headerText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPath">logoPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColor">textColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backgroundColorInput`<sup>Optional</sup> <a name="backgroundColorInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColorInput"></a>

```typescript
public readonly backgroundColorInput: string;
```

- *Type:* string

---

##### `footerTextInput`<sup>Optional</sup> <a name="footerTextInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerTextInput"></a>

```typescript
public readonly footerTextInput: string;
```

- *Type:* string

---

##### `headerTextInput`<sup>Optional</sup> <a name="headerTextInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerTextInput"></a>

```typescript
public readonly headerTextInput: string;
```

- *Type:* string

---

##### `logoPathInput`<sup>Optional</sup> <a name="logoPathInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPathInput"></a>

```typescript
public readonly logoPathInput: string;
```

- *Type:* string

---

##### `textColorInput`<sup>Optional</sup> <a name="textColorInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColorInput"></a>

```typescript
public readonly textColorInput: string;
```

- *Type:* string

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColor"></a>

```typescript
public readonly backgroundColor: string;
```

- *Type:* string

---

##### `footerText`<sup>Required</sup> <a name="footerText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerText"></a>

```typescript
public readonly footerText: string;
```

- *Type:* string

---

##### `headerText`<sup>Required</sup> <a name="headerText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerText"></a>

```typescript
public readonly headerText: string;
```

- *Type:* string

---

##### `logoPath`<sup>Required</sup> <a name="logoPath" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPath"></a>

```typescript
public readonly logoPath: string;
```

- *Type:* string

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColor"></a>

```typescript
public readonly textColor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustOrganizationLoginDesign;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

---



