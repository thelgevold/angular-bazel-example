
import { Cmp1610Component } from './cmp';
describe('Cmp1610Component', () => {
  it('should add', () => {
    expect(new Cmp1610Component().add1610(1)).toBe(1611);
  });
});