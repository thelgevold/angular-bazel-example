
import { Cmp8495Component } from './cmp';
describe('Cmp8495Component', () => {
  it('should add', () => {
    expect(new Cmp8495Component().add8495(1)).toBe(8496);
  });
});