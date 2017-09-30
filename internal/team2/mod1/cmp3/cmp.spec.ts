
import { Cmp8213Component } from './cmp';
describe('Cmp8213Component', () => {
  it('should add', () => {
    expect(new Cmp8213Component().add8213(1)).toBe(8214);
  });
});