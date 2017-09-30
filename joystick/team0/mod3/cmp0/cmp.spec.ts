
import { Cmp9030Component } from './cmp';
describe('Cmp9030Component', () => {
  it('should add', () => {
    expect(new Cmp9030Component().add9030(1)).toBe(9031);
  });
});