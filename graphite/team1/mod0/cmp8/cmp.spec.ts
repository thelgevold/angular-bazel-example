
import { Cmp6108Component } from './cmp';
describe('Cmp6108Component', () => {
  it('should add', () => {
    expect(new Cmp6108Component().add6108(1)).toBe(6109);
  });
});