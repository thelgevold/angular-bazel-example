
import { Cmp4970Component } from './cmp';
describe('Cmp4970Component', () => {
  it('should add', () => {
    expect(new Cmp4970Component().add4970(1)).toBe(4971);
  });
});