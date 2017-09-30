
import { Cmp8127Component } from './cmp';
describe('Cmp8127Component', () => {
  it('should add', () => {
    expect(new Cmp8127Component().add8127(1)).toBe(8128);
  });
});