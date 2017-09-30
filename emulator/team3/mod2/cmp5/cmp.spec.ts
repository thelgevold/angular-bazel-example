
import { Cmp4325Component } from './cmp';
describe('Cmp4325Component', () => {
  it('should add', () => {
    expect(new Cmp4325Component().add4325(1)).toBe(4326);
  });
});