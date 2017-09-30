
import { Cmp5030Component } from './cmp';
describe('Cmp5030Component', () => {
  it('should add', () => {
    expect(new Cmp5030Component().add5030(1)).toBe(5031);
  });
});