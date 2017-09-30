
import { Cmp5363Component } from './cmp';
describe('Cmp5363Component', () => {
  it('should add', () => {
    expect(new Cmp5363Component().add5363(1)).toBe(5364);
  });
});