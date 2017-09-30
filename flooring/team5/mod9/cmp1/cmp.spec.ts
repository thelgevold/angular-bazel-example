
import { Cmp5591Component } from './cmp';
describe('Cmp5591Component', () => {
  it('should add', () => {
    expect(new Cmp5591Component().add5591(1)).toBe(5592);
  });
});