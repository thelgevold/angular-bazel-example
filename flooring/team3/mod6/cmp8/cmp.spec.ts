
import { Cmp5368Component } from './cmp';
describe('Cmp5368Component', () => {
  it('should add', () => {
    expect(new Cmp5368Component().add5368(1)).toBe(5369);
  });
});