
import { Cmp9510Component } from './cmp';
describe('Cmp9510Component', () => {
  it('should add', () => {
    expect(new Cmp9510Component().add9510(1)).toBe(9511);
  });
});