
import { Cmp8002Component } from './cmp';
describe('Cmp8002Component', () => {
  it('should add', () => {
    expect(new Cmp8002Component().add8002(1)).toBe(8003);
  });
});