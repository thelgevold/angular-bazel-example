
import { Cmp8323Component } from './cmp';
describe('Cmp8323Component', () => {
  it('should add', () => {
    expect(new Cmp8323Component().add8323(1)).toBe(8324);
  });
});