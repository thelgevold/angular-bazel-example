
import { Cmp4370Component } from './cmp';
describe('Cmp4370Component', () => {
  it('should add', () => {
    expect(new Cmp4370Component().add4370(1)).toBe(4371);
  });
});