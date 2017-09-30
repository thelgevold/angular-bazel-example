
import { Cmp5015Component } from './cmp';
describe('Cmp5015Component', () => {
  it('should add', () => {
    expect(new Cmp5015Component().add5015(1)).toBe(5016);
  });
});