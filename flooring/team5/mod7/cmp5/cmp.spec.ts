
import { Cmp5575Component } from './cmp';
describe('Cmp5575Component', () => {
  it('should add', () => {
    expect(new Cmp5575Component().add5575(1)).toBe(5576);
  });
});