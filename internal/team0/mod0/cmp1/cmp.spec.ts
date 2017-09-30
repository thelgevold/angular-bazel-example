
import { Cmp8001Component } from './cmp';
describe('Cmp8001Component', () => {
  it('should add', () => {
    expect(new Cmp8001Component().add8001(1)).toBe(8002);
  });
});