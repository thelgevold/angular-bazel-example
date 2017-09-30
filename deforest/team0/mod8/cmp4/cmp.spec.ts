
import { Cmp3084Component } from './cmp';
describe('Cmp3084Component', () => {
  it('should add', () => {
    expect(new Cmp3084Component().add3084(1)).toBe(3085);
  });
});