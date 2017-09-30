
import { Cmp8254Component } from './cmp';
describe('Cmp8254Component', () => {
  it('should add', () => {
    expect(new Cmp8254Component().add8254(1)).toBe(8255);
  });
});