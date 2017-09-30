
import { Cmp4339Component } from './cmp';
describe('Cmp4339Component', () => {
  it('should add', () => {
    expect(new Cmp4339Component().add4339(1)).toBe(4340);
  });
});