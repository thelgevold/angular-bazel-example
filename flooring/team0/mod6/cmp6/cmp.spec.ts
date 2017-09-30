
import { Cmp5066Component } from './cmp';
describe('Cmp5066Component', () => {
  it('should add', () => {
    expect(new Cmp5066Component().add5066(1)).toBe(5067);
  });
});