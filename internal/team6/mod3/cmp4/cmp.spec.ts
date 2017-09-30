
import { Cmp8634Component } from './cmp';
describe('Cmp8634Component', () => {
  it('should add', () => {
    expect(new Cmp8634Component().add8634(1)).toBe(8635);
  });
});