
import { Cmp8088Component } from './cmp';
describe('Cmp8088Component', () => {
  it('should add', () => {
    expect(new Cmp8088Component().add8088(1)).toBe(8089);
  });
});