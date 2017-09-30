
import { Cmp8183Component } from './cmp';
describe('Cmp8183Component', () => {
  it('should add', () => {
    expect(new Cmp8183Component().add8183(1)).toBe(8184);
  });
});