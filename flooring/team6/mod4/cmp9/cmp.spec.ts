
import { Cmp5649Component } from './cmp';
describe('Cmp5649Component', () => {
  it('should add', () => {
    expect(new Cmp5649Component().add5649(1)).toBe(5650);
  });
});