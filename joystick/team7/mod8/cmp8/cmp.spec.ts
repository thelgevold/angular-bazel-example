
import { Cmp9788Component } from './cmp';
describe('Cmp9788Component', () => {
  it('should add', () => {
    expect(new Cmp9788Component().add9788(1)).toBe(9789);
  });
});