
import { Cmp4922Component } from './cmp';
describe('Cmp4922Component', () => {
  it('should add', () => {
    expect(new Cmp4922Component().add4922(1)).toBe(4923);
  });
});