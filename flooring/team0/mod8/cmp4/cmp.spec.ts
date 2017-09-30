
import { Cmp5084Component } from './cmp';
describe('Cmp5084Component', () => {
  it('should add', () => {
    expect(new Cmp5084Component().add5084(1)).toBe(5085);
  });
});