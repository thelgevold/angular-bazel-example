
import { Cmp9610Component } from './cmp';
describe('Cmp9610Component', () => {
  it('should add', () => {
    expect(new Cmp9610Component().add9610(1)).toBe(9611);
  });
});