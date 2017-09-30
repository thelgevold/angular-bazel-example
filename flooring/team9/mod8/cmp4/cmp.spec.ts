
import { Cmp5984Component } from './cmp';
describe('Cmp5984Component', () => {
  it('should add', () => {
    expect(new Cmp5984Component().add5984(1)).toBe(5985);
  });
});